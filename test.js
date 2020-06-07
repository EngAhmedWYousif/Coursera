if (window.location.hostname.indexOf("dawriplus.com") >= 0 && !window.lnEmbedderLoaded) {
    window.lnEmbedderLoaded = true;

    document.domain = "dawriplus.com";

    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = ".vf-spinner{filter: invert(1);opacity:.6;background-image:url(https://rating.dawriplus.com/assets/ball/football_ball.png);background-position:50%;background-repeat:no-repeat;background-size:70px;z-index:999;position:absolute;top:30%;bottom:30%;left:30%;right:30%;-webkit-animation-name:spin;-webkit-animation-duration:2s;-webkit-animation-iteration-count:infinite;-webkit-animation-timing-function:linear;-moz-animation-name:spin;-moz-animation-duration:2s;-moz-animation-iteration-count:infinite;-moz-animation-timing-function:linear;-ms-animation-name:spin;-ms-animation-duration:2s;-ms-animation-iteration-count:infinite;-ms-animation-timing-function:linear;animation-name:spin;animation-duration:2s;animation-iteration-count:infinite;animation-timing-function:linear}.vf-spinner.black{opacity:.7;background-image:url(\"data: image / svg + xml,% 3Csvg xmlns = 'http://www.w3.org/2000/svg' width = '83' height = '83' % 3E % 3Cpath fill = '%23282828' stroke = '%23282828' d = 'M70.321 11.645A41.384 41.384 0 0 0 40.767.006c-5.596.107-11.008 1.291-16.087 3.55a41.384 41.384 0 0 0-13.034 9.122 41.38 41.38 0 0 0-11.64 29.55A41.297 41.297 0 0 0 3.55 58.324a41.38 41.38 0 0 0 9.121 13.032 41.383 41.383 0 0 0 29.554 11.639 41.383 41.383 0 0 0 29.13-12.663 41.38 41.38 0 0 0 8.662-13.343 41.265 41.265 0 0 0 2.978-16.208 41.298 41.298 0 0 0-3.542-16.094 41.587 41.587 0 0 0-9.13-13.041zM17.97 9.777c.37-.294.73-.605 1.109-.882 1.989-1.447 4.2-2.628 6.45-3.618A39.84 39.84 0 0 1 40.8 1.924a39.948 39.948 0 0 1 10.477 1.212c-1.325.564-2.937 1.62-5.633 4.005a34.3 34.3 0 0 0-6.887.085 37.957 37.957 0 0 0-8.979 2.162 37.893 37.893 0 0 0-6.174 2.941c-2.202-.746-5.043-1.62-6.445-2.05.219.067.664-.386.81-.502zm37.978 9.713L49.191 38.98l-16.968 3.566L17.9 28.263c.835-6.607 5.249-12.525 5.249-12.525.025-.018 2.935-2.196 7.63-3.926a35.1 35.1 0 0 1 8.328-1.994 32.3 32.3 0 0 1 6.81-.023l10.031 9.695zM3.408 40.783c-.387 2.823-.432 5.745-.154 8.678a35.881 35.881 0 0 1-.84-1.703 39.31 39.31 0 0 1-.49-5.58 39.442 39.442 0 0 1 3.253-16.449c-.207 2.62-.038 5.328.181 7.382a35.218 35.218 0 0 0-1.95 7.672zm3.707 15.028A36.454 36.454 0 0 1 5.9 49.64c-.313-2.897-.284-5.784.103-8.555a31.92 31.92 0 0 1 1.488-6.181c2.826-2.473 6.601-3.96 8.69-4.65L30.24 44.272l-1.174 15.653-13.416 4.742c-3.479-2.467-6.344-5.766-8.534-8.857zm41.4 21.911c-2.973 2.023-10.566 2.626-13.65 2.793a39.29 39.29 0 0 1-9.872-3.054 39.33 39.33 0 0 1-7.738-4.695c.042-.079-.44-4.23-.449-5.746l13.554-4.788 15.854 6.533 2.327 8.93-.026.027zm25.902-14.254c-2.286 3.423-5.038 6.619-8.37 9.066-3.125 2.286-7.348 3.127-11.103 3.812-.287.048-3.877.704-3.905.582l-2.327-8.94L59.59 56.265l14.647-1.608c.268 2.333.623 5.735.834 7.816-.22.335-.433.67-.654.996zm.022-11.736c-.05.088-.101.185-.152.29L59.701 53.62l-8.103-13.617 6.774-19.535 10.053.46a35.344 35.344 0 0 1 5.735 5.82 31.881 31.881 0 0 1 4.782 8.697c-.947 9.712-3.434 14.586-4.503 16.287zm4.858-21.9a34.507 34.507 0 0 0-3.1-4.74 37.478 37.478 0 0 0-6.496-6.505c-.483-2.197-1.764-5.645-5.105-9.231.062.042.123.093.185.136.203.145.398.298.601.443a39.784 39.784 0 0 1 13.923 19.81c-.009.035-.008.061-.008.088z' opacity = '.52' /% 3E % 3C / svg % 3E\")!important}@-ms-keyframes spin{from{-ms-transform:rotate(0)}to{-ms-transform:rotate(360deg)}}@-moz-keyframes spin{from{-moz-transform:rotate(0)}to{-moz-transform:rotate(360deg)}}@-webkit-keyframes spin{from{-webkit-transform:rotate(0)}to{-webkit-transform:rotate(360deg)}}@keyframes spin{from{transform:rotate(0)}to{transform:rotate(360deg)}}";

    var me = setInterval(function () {
        var widget = document.getElementById("ln-widget");

        if (widget) {
            var id = widget.getAttribute("lnId");

            clearInterval(me);

            widget.style.position = "relative";
            widget.style.minHeight = "300px";

            document.getElementsByTagName('head')[0].appendChild(style);

            widget.innerHTML = '<iframe id="ln-iframe" style="opacity: 0" width="100%" src="https://www.live-now.com/en-it/content-widget/' + id + '/livenow" frameborder="0"> <p>Your browser does not support iframes.</p> </iframe>';

            //var spinnerDiv = document.createElement('div');
            //spinnerDiv.className = 'vf-spinner';
            poll.appendChild(spinnerDiv);

            // Iframe
            var iframe = document.getElementById("ln-iframe");

            iframe.onload = function () {
                var checkExist = setInterval(function () {
                    var exist = iframe.contentDocument.getElementsByName("body").length > 0;

                    if (exist) {
                        clearInterval(checkExist);

                        var height = 0;
                        var doc = iframe.contentWindow.document;
                        
                        // Content
                        var partial = doc.getElementsByClassName("rating-poll-content")[0].scrollHeight;
                        height += partial;


                        iframe.style.height = height + 'px';
                        iframe.style.opacity = 1;
                        spinnerDiv.style.display = 'none';
                    }
                }, 100);
            };
        }
    }, 100);
}
