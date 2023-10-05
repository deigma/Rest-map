<%@ page contentType="text/html; charset=UTF-8" %>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
</head>
<body>
    <div id="map" style="width:500px;height:400px;"></div>
</body>
    <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=&libraries=services,clusterer,drawing"></script>

    <script type="text/javascript" src="resources/js/index.js"></script>

    <script>
        let map = drawMap(37.5642135, 127.0016985);
        markByRouteCd("", "0010");
    </script>
</html>