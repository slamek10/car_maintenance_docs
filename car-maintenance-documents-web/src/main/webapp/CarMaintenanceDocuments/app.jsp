<!DOCTYPE HTML>
<%@ page language="java" 
	import="java.util.Map"
	contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
	
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>

<html manifest="">
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=10, user-scalable=yes">

	<title></title>
    
	<link rel="stylesheet" href="../css/normalize.css">
	<link rel="stylesheet" href="../css/main.css">
	
	<script src="../js/vendor/modernizr-2.6.2.min.js"></script>
	<style type="text/css">
	h1 {
		height: 100%;
		/* The html and body elements cannot have any padding or margin. */
		margin: 0;
		font-size: 14px;
		font-family: 'Open Sans', sans-serif;
		font-size: 32px;
		margin-bottom: 3px;
	}
	.entry-header {
		text-align: left;
		margin: 0 auto 50px auto;
		width: 80%;
        max-width: 978px;
		position: relative;
		z-index: 10001;
	}
	#content {
		padding-top: 100px;
	}
	</style>

    <!-- 
    <script type="text/javascript">
        var Ext = Ext || {}; // Ext namespace won't be defined yet...

        // This function is called by the Microloader after it has performed basic
        // device detection. The results are provided in the "tags" object. You can
        // use these tags here or even add custom tags. These can be used by platform
        // filters in your manifest or by platformConfig expressions in your app.
        //
        Ext.beforeLoad = function (tags) {
            var s = location.search,  // the query string (ex "?foo=1&bar")
                profile;

            // For testing look for "?classic" or "?modern" in the URL to override
            // device detection default.
            //
            if (s.match(/\bclassic\b/)) {
                profile = 'classic';
            }
            else if (s.match(/\bmodern\b/)) {
                profile = 'modern';
            }
            else {
                profile = tags.desktop ? 'classic' : 'modern';
                //profile = tags.phone ? 'modern' : 'classic';
            }

            Ext.manifest = profile; // this name must match a build profile name

            // This function is called once the manifest is available but before
            // any data is pulled from it.
            //
            //return function (manifest) {
                // peek at / modify the manifest object
            //};
        };
    </script>
   -->

	<!-- 
	<style type="text/css">
		.x-grid-item:not(.x-grid-item-selected) .grid-row-protected > .x-grid-cell {
			background-color: #ebeef0 !important;
		}
		.grid-item-selected > tbody > .grid-row-protected  .x-grid-cell {
			background-color: ${stateManager.aplSettings.bgColorPage};
		}
		.x-form-field[readonly] {
			background-color: #ebeef0 !important;
		}
	</style>
	 -->
    <!-- The line below must be kept intact for Sencha Cmd to build your application -->
    <script id="microloader" data-app="fc2133f5-0e1d-4c7a-8e7e-81f9e438fbbe" type="text/javascript" src="bootstrap.js"></script>

</head>
<body>	
	<script src="../js/vendor/jquery-1.9.1.min.js"></script>
</body>
</html>
