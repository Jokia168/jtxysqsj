function meshline(map) {

    var line1 = [
        new AMap.LngLat(113.00869, 28.067686, ),
        new AMap.LngLat(112.369182, 28.518018),
        new AMap.LngLat(111.720989, 29.023595),
        new AMap.LngLat(110.208652, 29.411332)
    ];

    var line2 = [
        new AMap.LngLat(110.166477, 29.474413),
        new AMap.LngLat(110.260912, 29.41493),
        new AMap.LngLat(110.377642, 29.360785),
        new AMap.LngLat(110.537138, 29.119856)
    ];

    var line3 = [
        new AMap.LngLat(110.537138, 29.119856),
        new AMap.LngLat(110.203223, 28.841695),
        new AMap.LngLat(109.879298, 28.536303),
        new AMap.LngLat(109.671416, 28.217772)
    ];

    var line4 = [
        new AMap.LngLat(109.671416, 28.217772),
        new AMap.LngLat(109.642125, 28.115706),
        new AMap.LngLat(109.612724, 28.017108),
        new AMap.LngLat(109.581072, 27.958062)
    ];
    var line5 = [
        new AMap.LngLat(109.581072, 27.958062),
        new AMap.LngLat(109.852125, 27.709706),
        new AMap.LngLat(109.902724, 27.657108),
        new AMap.LngLat(109.998488, 27.554978)
    ];
    var line6 = [
        new AMap.LngLat(109.998488, 27.554978),
        new AMap.LngLat(109.902125, 27.059706),
        new AMap.LngLat(109.852724, 26.557108),
        new AMap.LngLat(109.784412, 26.158054)
    ];


    // var line5 = [
    //     new AMap.LngLat(111.613445, 26.420394),
    //     new AMap.LngLat(110.692125, 26.749706),
    //     new AMap.LngLat(109.712724, 27.017108),
    //     new AMap.LngLat(109.691881, 27.441369)
    // ];
    // var line6 = [
    //     new AMap.LngLat(111.613445, 26.420394),
    //     new AMap.LngLat(110.90, 26.35),
    //     new AMap.LngLat(109.83, 26.25),
        
    //     new AMap.LngLat(109.78, 26.17)
    // ];

    var lines = [line1, line2, line3, line4, line5, line6];

    for (var i = 0; i < 6; i++) {

        var points = lines[i];

        var object3Dlayer = new AMap.Object3DLayer();
        var numberOfPoints = 180;
        var minHeight = 6;

        var meshLine = new AMap.Object3D.MeshLine({
            path: computeBezier(points, numberOfPoints, minHeight),
            height: getEllipseHeight(numberOfPoints, 300000, minHeight),
            color: 'rgba(55,129,240, 0.9)',
            width: 8
        });



        meshLine.transparent = true;
        object3Dlayer.add(meshLine);
        meshLine['backOrFront'] = 'both';
        map.add(object3Dlayer);

        function pointOnCubicBezier(cp, t) {
            var ax, bx, cx;
            var ay, by, cy;
            var tSquared, tCubed;

            cx = 3.0 * (cp[1].lng - cp[0].lng);
            bx = 3.0 * (cp[2].lng - cp[1].lng) - cx;
            ax = cp[3].lng - cp[0].lng - cx - bx;

            cy = 3.0 * (cp[1].lat - cp[0].lat);
            by = 3.0 * (cp[2].lat - cp[1].lat) - cy;
            ay = cp[3].lat - cp[0].lat - cy - by;

            tSquared = t * t;
            tCubed = tSquared * t;

            var lng = (ax * tCubed) + (bx * tSquared) + (cx * t) + cp[0].lng;
            var lat = (ay * tCubed) + (by * tSquared) + (cy * t) + cp[0].lat;

            return new AMap.LngLat(lng, lat);
        }

        function computeBezier(points, numberOfPoints) {
            var dt;
            var i;
            var curve = [];

            dt = 1.0 / (numberOfPoints - 1);

            for (i = 0; i < numberOfPoints; i++) {
                curve[i] = pointOnCubicBezier(points, i * dt);
            }

            return curve;
        }

        function getEllipseHeight(count, maxHeight, minHeight) {
            var height = [];
            var radionUnit = Math.PI / 180;

            for (var i = 0; i < count; i++) {
                var radion = i * radionUnit;

                height.push(minHeight + Math.sin(radion) * maxHeight);
            }

            return height;
        }

        function update() {
            var width = +document.querySelector('#widthInput').value;
            var maxHeight = +document.querySelector('#heightInput').value;

            if (width > 0) {
                meshLine.setWidth(width);
            } else {
                document.querySelector('#widthInput').value = 20;
            }

            if (maxHeight >= 1000) {
                meshLine.setHeight(getEllipseHeight(numberOfPoints, maxHeight, minHeight));
            } else {
                document.querySelector('#heightInput').value = 2000000;
            }
        }
    }
}