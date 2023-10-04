let drawMap = (latitude, longitude) => {
    var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
    var options = { //지도를 생성할 때 필요한 기본 옵션
        center: new kakao.maps.LatLng(latitude, longitude), //지도의 중심좌표.
        level: 5 //지도의 레벨(확대, 축소 정도)
    };

    var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

    return map;
};


let markMap = (latitude, longitude, map) => {
    var position =  new kakao.maps.LatLng(latitude, longitude);

    var marker = new kakao.maps.Marker({
      position: position,
      clickable: true // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
    });

    marker.setMap(map);
};

// positions는 객체 { latitue, longitude } 배열
let multiMarkMap = (positions, map) => {
    for (let position of positions) {
        markMap(position.latitude, position.longitude, map);
    }
};
