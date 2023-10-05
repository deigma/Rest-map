let drawMap = (latitude, longitude) => {
    var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
    var options = { //지도를 생성할 때 필요한 기본 옵션
        center: new kakao.maps.LatLng(latitude, longitude), //지도의 중심좌표.
        level: 5 //지도의 레벨(확대, 축소 정도)
    };

    var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

    return map;
}

let markMap = (latitude, longitude) => {
    var position =  new kakao.maps.LatLng(latitude, longitude);

    var marker = new kakao.maps.Marker({
      position: position,
      clickable: true // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
    });

    marker.setMap(map);
};

// positions는 객체 { latitue, longitude } 배열
let multiMarkMap = (positions) => {
    for (let position of positions) {
        markMap(position.latitude, position.longitude, map);
    }
};

// 주소로 좌표 알아냄
let markByAddr = (addr) => {
    // 주소-좌표 변환 객체를 생성합니다
    var geocoder = new kakao.maps.services.Geocoder();

    // 주소로 좌표를 검색합니다
    geocoder.addressSearch(addr, function(result, status) {
        // 정상적으로 검색이 완료됐으면
         if (status === kakao.maps.services.Status.OK) {
            var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

            var marker = new kakao.maps.Marker({
                map: map,
                position: coords,
            });

            marker.setMap(map);
        }
    });
};


let markByRouteCd = (exKey, routeCd) => {
    locationInfoUrl = "http://data.ex.co.kr/openapi/restinfo/hiwaySvarInfoList";
    locationInfoUrl += "?key=" + exKey + "&'type=json";
    locationInfoUrl += "&routeCd=" + routeCd;

    let xhr = new XMLHttpRequest();

    xhr.open("get", locationInfoUrl);

    xhr.send();

    xhr.onload = () => {
        if (xhr.status != 200) {
            alert("오류!");
            return;
        }

        let result = JSON.parse(xhr.response);

        let positions = [];
        for (let r of result.list) {
            markByAddr(r.svarAddr);
        }
    }
}