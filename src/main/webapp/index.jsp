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
    <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey="></script>
    <script type="text/javascript" src="resources/js/index.js"></script>

    <script>
        let map = drawMap(33.450701, 126.570667);

        markMap(33.450701, 126.570667, map);
    </script>
</html>