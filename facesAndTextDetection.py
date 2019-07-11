from zipfile import ZipFile
from PIL import Image,ImageDraw
import pytesseract
import cv2 as cv
import numpy as np
import itertools
from math import ceil
from numpy import asarray

# loading the face detection classifier
face_cascade = cv.CascadeClassifier('readonly/haarcascade_frontalface_default.xml')

def process_files(zipFileName):
    files_data =[]
    with ZipFile(zipFileName, 'r') as zip:
        for fileInfo in zip.infolist():
             with zip.open(fileInfo.filename) as f:
                pil_img = Image.open(f)
                cv_img = asarray(pil_img)
                cv_gary_img = cv.cvtColor(cv_img, cv.COLOR_BGR2GRAY)
                fileData = {"filename":fileInfo.filename,"faces_image":get_faces_image(pil_img,cv_gary_img),"text": get_text(cv_gary_img)}
                files_data.append(fileData)                
    return files_data
                
def get_text(cv_gary_img):
     # Apply dilation and erosion to remove some noise
    kernel = np.ones((1, 1), np.uint8)
    gray = cv.dilate(cv_gary_img, kernel, iterations=1)
    gray = cv.erode(gray, kernel, iterations=1)
    gray = cv.adaptiveThreshold(gray, 255, cv.ADAPTIVE_THRESH_GAUSSIAN_C, cv.THRESH_BINARY, 31, 2)
    return pytesseract.image_to_string(gray)

def get_faces_image(pil_img,cv_gary_img):
    faces = face_cascade.detectMultiScale(cv_gary_img,scaleFactor=1.30, minNeighbors=5, minSize=(30,30),flags=cv.CASCADE_SCALE_IMAGE)
    contact_sheet = None
    if len(faces)>0:
        contact_sheet = Image.new(pil_img.mode, (100*5,100*int(ceil(len(faces)/5.0))))
        faces_and_postions = zip(faces,itertools.product(range(0,contact_sheet.height,100),range(0,contact_sheet.width,100)))   
        for [x,y,w,h],p in faces_and_postions:
            face_img = pil_img.crop((x,y,x+w,y+h))
            face_img.thumbnail((100,100),Image.ANTIALIAS)
            contact_sheet.paste(face_img ,p[::-1])
    return contact_sheet


files_data = process_files('readonly/images.zip')



def search(txt):
    for file_data in list(filter(lambda i: txt in i["text"] , files_data)):
        print(f'Results found in file {file_data["filename"]}')
        if file_data["faces_image"] == None:
            print(f"But there were no faces in that file!")
        else:
            display(file_data["faces_image"])      

# searching for mark and Christopher
print("Mark Results:")
search("Mark")
print("Christopher Results:")
search("Christopher")
