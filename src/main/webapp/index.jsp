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

        let url = "http://data.ex.co.kr/openapi/locationinfo/locationinfoRest?key=&type=json";
        let xhr = new XMLHttpRequest();

        xhr.open("get", url);

        xhr.send();

        xhr.onload = () => {
            if (xhr.status != 200) {
                alert("오류!");
                return;
            }

            let result = JSON.parse(xhr.response);

            let positions = [];
            for (let r of result.list) {
                let position = {
                    latitude: r.yValue,
                    longitude: r.xValue,
                };

                positions.push(position);
            }

            multiMarkMap(positions, map);
        }



        markMap(33.450701, 126.570667, map);
    </script>
</html>