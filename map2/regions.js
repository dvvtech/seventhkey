
var context, canvas;
var imageObj = new Image();//компании
var imageObj2 = new Image();//филиалы
var widthMarker = 32;
var heightMarker = 32;
var isAutoRotate = false, isAutoRotate2 = false;
var mouseX, mouseY;
var grd;

var outTime, inTime;
var resultOut = true;
var mouseInMap = false;
var company;
var currentCity = "";
var singleCount = 1;
var isShowToolTip = true;
var isShowCompany = true;//показываем компании true // филиалы - false

var test = false;


function mouseDown(event) {

    patch = false;
    is_mouseRotate = true;
    var v = 'undefined';
    if (v.search(event.x) == 0) {
        oldX = event.layerX;
        oldY = event.layerY;
    }
    else {
        oldX = event.x;
        oldY = event.y;
    }

var obj = canvas;
    var top = 0;
    var left = 0;
    while (obj && obj.tagName != 'BODY') {
        top += obj.offsetTop;
        left += obj.offsetLeft;
        obj = obj.offsetParent;
    }
    // return relative mouse position
    var mouseX = oldX - left + window.pageXOffset;
    var mouseY = oldY - top + window.pageYOffset;
    
if (isShowCompany) {

        for (var i = 0; i < currentMarkerCoords_localVertex.length; i++) {

            var minX = currentMarkerCoords_localVertex[i].x + 5;
            var maxX = currentMarkerCoords_localVertex[i].x + widthMarker - 7;
            var minY = currentMarkerCoords_localVertex[i].y;
            var maxY = currentMarkerCoords_localVertex[i].y + heightMarker;

            var lenW = currentMarkerCoords_localVertex[i].title.length * 6 + 3;
            var minX2 = currentMarkerCoords_localVertex[i].x - lenW / 2 + 12;
            var maxX2 = minX2 + lenW;
            var minY2 = currentMarkerCoords_localVertex[i].y - 30;
            var maxY2 = currentMarkerCoords_localVertex[i].y - 6;            

            if (mouseX >= minX && mouseX <= maxX && mouseY >= minY && mouseY <= maxY) {

                //избавится от копипаста
                $("#idCompanyName").fadeOut(1);
                $("#idCompanyName").fadeIn(1000);
                //$("#idDescription").fadeIn(1000);
                document.getElementById("idCompanyName").innerHTML = currentMarkerCoords_localVertex[i].desc;
                //document.getElementById("idDescription").textContent = currentMarkerCoords_localVertex[i].title + " Описание";

                if (currentMarkerCoords_localVertex[i].title == "      Гидроэлектромонтаж")
                {
                    isShowCompany = false;
                    initCurrentMarkers(markerCoords1_localVertex);
                    drawMarkers();
                }
                if (currentMarkerCoords_localVertex[i].title == "      БМУ Гидроэлектромонтаж")
                {
                    isShowCompany = false;
                    initCurrentMarkers(markerCoords4_localVertex);
                    drawMarkers();
                }
            }
            else if (mouseX >= minX2 && mouseX <= maxX2 && mouseY >= minY2 && mouseY <= maxY2)
            {
                //избавится от копипаста
                $("#idCompanyName").fadeOut(1);
                $("#idCompanyName").fadeIn(1000);
                //$("#idDescription").fadeIn(1000);
                document.getElementById("idCompanyName").innerHTML = currentMarkerCoords_localVertex[i].desc;
                //document.getElementById("idDescription").textContent = currentMarkerCoords_localVertex[i].title + " Описание";

                if (currentMarkerCoords_localVertex[i].title == "      Гидроэлектромонтаж") {
                    isShowCompany = false;
                    initCurrentMarkers(markerCoords1_localVertex);
                    drawMarkers();
                }
                if (currentMarkerCoords_localVertex[i].title == "      БМУ Гидроэлектромонтаж") {
                    isShowCompany = false;
                    initCurrentMarkers(markerCoords4_localVertex);
                    drawMarkers();
                }
            }
        }        
    }
    else {
        for (var i = 0; i < currentMarkerCoords_localVertex.length; i++) {
            var minX = currentMarkerCoords_localVertex[i].x + 5;
            var maxX = currentMarkerCoords_localVertex[i].x + widthMarker - 7;
            var minY = currentMarkerCoords_localVertex[i].y;
            var maxY = currentMarkerCoords_localVertex[i].y + heightMarker;
            if (mouseX >= minX && mouseX <= maxX && mouseY >= minY && mouseY <= maxY) {

                $("#idCompanyName").fadeOut(1);
                $("#idCompanyName").fadeIn(1000);
                //$("#idDescription").fadeIn(1000);
                document.getElementById("idCompanyName").innerHTML = currentMarkerCoords_localVertex[i].desc;
                //document.getElementById("idDescription").textContent = currentMarkerCoords_localVertex[i].title + " Описание";
            }
        }

        if (mouseX > 10 && mouseX < 30 && mouseY > 10 && mouseY < 30)
        {
            isShowCompany = true;
            initCurrentMarkers(markerCoords0_localVertex);
            drawMarkers();
            $("#idCompanyName").fadeOut(1);
        }
    }
}

function showMap(companyName) {
                
    document.getElementById("idCompanyName").textContent = "";
    //document.getElementById("idDescription").textContent = "";
    canvas = null;
    context = null;
    company = companyName;
    mapCoords_localVertex.length = 0;
    mapCoords_transVertex.length = 0;
    initMapCoords();    
    initMarkers();
    drawMap();
}

function pausecomp(millis) {
    var date = new Date();
    var curDate = null;
    do { curDate = new Date(); }
    while (curDate - date < millis);
}

function initMarkers() {
            
    markerCoords0_localVertex.length = 0;
    markerCoords1_localVertex.length = 0;
    markerCoords2_localVertex.length = 0;
    markerCoords3_localVertex.length = 0;
    markerCoords4_localVertex.length = 0;
    currentMarkerCoords_localVertex.length = 0;

    markerCoords0_localVertex.push({ x: 470, y: 240, z: 0, title: "      Гидроэлектромонтаж", desc: "<b>ОАО Гидроэлектромонтаж</b></br> 675000, г. Благовещенск, Амурская</br> область, ул. Пионерская, 204 Тел.: (4162) 399602  факс: (4162) 399602  officebgem@mail.ru www.bgem.ru Генеральный директор: Васильев Валерий Александрович" });
    markerCoords0_localVertex.push({ x: 152, y: 231, z: 0, title: "      Камаэлектромонтаж", desc: "<b>ООО Камаэлектромонтаж</b></br> 617762, Пермский край, г. Чайковский, ул. Гагарина, д. 140 Тел.: (34241) 4-32-16, 4-32-85 факс: (34241) 4-32-80 electromontazh@yandex.ru  www.kamelmo.ru Директор: Ребров Анатолий Никандрович" });
    markerCoords0_localVertex.push({ x: 209, y: 281, z: 0, title: "      «НПО «Промэнергосервис»", desc: "<b>ООО «НПО «Промэнергосервис»</b></br> 644007, г. Омск, ул. Октябрьская, 190 Тел.: (3812) - 56-76-40, (3812) - 27-25-82 Факс: (3812) - 56-76-46 omsk-pes@mail.ru www.promenergoservis.ru Директор: Юрий Александрович Жидков" });
    markerCoords0_localVertex.push({ x: 385, y: 289, z: 0, title: "      БМУ Гидроэлектромонтаж", desc: "<b>ООО БМУ Гидроэлектромонтаж</b></br> 665717, Иркутская область, г. Братск, ул. Коммунальная 21,тел. (3953) 41-11-74 gemnl@gem.bratsk.ru www.bmu-gem.ru Директор: Анатолий Владимирович Хабутанов" });
    markerCoords0_localVertex.push({ x: 294, y: 315, z: 0, title: "      ГЭМ -Сибирь", desc: "<b>ОАО ГЭМ -Сибирь</b></br> 655100, Республика Хакасия, Усть-Абаканский район, пгт. Усть-Абакан, промбаза Тел: 8(3902) 28-24-20 Факс: 8(3902) 28-24-20 Генеральный директор: Абдубаков Идрис Алиевич" });
    
    markerCoords1_localVertex.push({ x: 106, y: 260, z: 0, title: "      Нововоронежский филиал", desc: "396070, Воронежская обл., г. Нововоронеж, Ул. Заводской проезд, д. 3 Тел.: 8 (47364) 9-20-64 факс: 8 (47364) 9-20-64 gemnv@mail.ru Директор филиала: Грушин Дмитрий Иванович" });
    markerCoords1_localVertex.push({ x: 56, y: 200, z: 0, title: "      Московский филиал", desc: "117246, г. Москва, Научный проезд, 19 Тел.: 8 (495) 2283708; факс: 8 (495) 2283709 bgem@mail.ru Директор филиала: Кульдо Олег Юрьевич" });
    markerCoords1_localVertex.push({ x: 50, y: 165, z: 0, title: "      Санкт-Петербургский филиал", desc: "г. Санкт-Петербург, Ул. Домостроителей, 4 БЦ «Парнас», офис 507 Тел.: 8 (952) 27457667 kvpspbgem@mail.ru Директор филиала: Крюков Владимир Петрович " });
    markerCoords1_localVertex.push({ x: 290, y: 290, z: 0, title: "      Саяно-Шушенский участок", desc: "655600, г. Саяногорск, Республика Хакасия, 1-4-54 Тел.:8 (913) 0582501 vaa_1979@mail.ru Директор филиала: Волошин Андрей Анатольевич " });
    markerCoords1_localVertex.push({ x: 531, y: 251, z: 0, title: "      Хабаровский филиал", desc: "680000, г. Хабаровск Тел.: 8 (4212) 91-00-22 Директор филиала: Пьянников Дмитрий Дмитриевич" });
    markerCoords1_localVertex.push({ x: 492, y: 237, z: 0, title: "      Бурейский филиал", desc: "676730, п. Талакан, Амурская обл. Производственная база ОАО «Гидроэлектромонтаж» Тел.:8 (416345) 4324 8 (929) 4784444 talakan.gem@mail.ru Директор филиала: Сиухин Иван Иванович" });
    markerCoords1_localVertex.push({ x: 517, y: 124, z: 0, title: "      Колымский филиал", desc: "Усть-Среднеканская ГЭС, Магаданская обл. Тел.: 8 (929) 4777140 mer-62@mail.ru Директор филиала: Мигурин Евгений Романович" });
    markerCoords1_localVertex.push({ x: 545, y: 312, z: 0, title: "      Приморский филиал", desc: "690091, г. Владивосток Ул. Мордовцева, 3, офис 805 Тел.:8 (4232) 226500 gem.vl@mail.ru Директор филиала: Кутняков Николай Владимирович" });
    markerCoords1_localVertex.push({ x: 397, y: 300, z: 0, title: "      Гусиноозерский филиал", desc: "671160, г. Гусиноозёрск, Республика Бурятия Тел.: 8 (3952) 337000; 8 (914) 9262596 sitren@bk.ru Руководитель проекта по реконструкции 4-го блока Гусиноозерской ГРЭС:Пестерев Александр Николаевич" });

    markerCoords4_localVertex.push({ x: 345, y: 289, z: 0, title: "      Братский филиал", desc: "665717, Промплощадка, база «ГЭМ», г.Братск, Иркутская обл., Тел./факс: (3953) 49-52-85, 49-51-11 Начальник участка: Кузнецов Михаил Михайлович " });
    markerCoords4_localVertex.push({ x: 329, y: 251, z: 0, title: "      Богучанский филиал", desc: "663491, Объединенная база N4, г.Кодинск, Красноярский край, Тел./факс: (39-143) 7-14-05, тел.:(39-143) 7-16-25, priembf@mail.ru Начальник филиала: Храбров Владимир Борисович" });
    markerCoords4_localVertex.push({ x: 387, y: 267, z: 0, title: "      Железногорский филиал", desc: "665653, Иркутская обл., г.Железногорск-Илимский, ул.Иващенко , 18, Тел./факс: (39566) 3-25-78, filialgem@rambler.ru Начальник филиала: Гуничев Николай Вячеславович " });
    markerCoords4_localVertex.push({ x: 357, y: 260, z: 0, title: "      Усть-Илимский филиал", desc: "666684, Иркутская обл., г.Усть-Илимск, Промплощадка КОС, Усть-Илимское шоссе, 20, тел./факс: (39535) 5-34-06 gemyi@irmail.ru Начальник филиала: Гунин Андрей Валентинович" });
    markerCoords4_localVertex.push({ x: 374, y: 300, z: 0, title: "      Иркутский филиал", desc: "664019, Иркутская обл., г.Иркутск, ул. Баррикад  209 Тел./факс: (3952) 70-58-88, 70-56-05 gemirkutsk@bk.ru Начальник филиала:  Волосников Евгений Юрьевич" });

    if (company == "All") {
        initCurrentMarkers(markerCoords0_localVertex);
    }
    
    if (singleCount == 1) {

        imageObj.onload = function () {
            drawMarkers();
            //canvas.addEventListener('mousemove', mouseMove, true);
        };
        imageObj2.onload = function () {          
            //canvas.addEventListener('mousemove', mouseMove, true);
        };
        imageObj.src = 'home.png';
        imageObj2.src = 'marker2.png';

        singleCount = 2;
    }
}

function drawMap() {

    var events = new Events("myCanvas");
    var message = "";

    var len = mapCoords_transVertex.length;

    for (var i = 0; i < len; i++) {

        if (mapCoords_localVertex[i].x == 0 && mapCoords_localVertex[i].y == 0 && mapCoords_localVertex[i].z == 0)
            continue;
        rotate_on_XYZ(mapCoords_transVertex[i], mapCoords_localVertex[i]);
        //toCenterCoords(mapCoords_transVertex[index]);
    }

    events.setStage(function () {
        this.clear();
        canvas = this.getCanvas();
        context = this.getContext();

        canvas.addEventListener("mousedown", mouseDown, false);
             
        grd = context.createRadialGradient(312, 250, 70, 312, 250, 450);
        grd.addColorStop(0, '#79BDFB');//// dark blue
        grd.addColorStop(1, '#FFFFFF');//// light blue
       
        context.lineWidth = 0.1;        
        
        this.beginRegion();
        drawRegion(mapCoords_transVertex);        
        //context.fill();
        //context.stroke();

        this.addRegionEventListener("mouseover", function () {
            message = "map over";
        });
        
        this.closeRegion();

        // display event
        writeMessage(this, message);
    });
}

function writeMessage(events, message) {

    if (isAutoRotate == false && isAutoRotate2 == false) {        
        
        drawRegion(mapCoords_transVertex);        

        context.fillStyle = grd;

        context.shadowColor = '#999';
        context.shadowBlur = 20;
        context.shadowOffsetX = 12;
        context.shadowOffsetY = 12;

        context.fill();
        context.stroke();

        drawMarkers();

        if (isShowCompany == false) {

            context.drawImage(imageObj, 10, 10);
        }

        if (events.mousePos != null) {
            mouseX = events.mousePos.x;
            mouseY = events.mousePos.y;
            //document.getElementById("Xcoord").textContent = mouseX;
            //document.getElementById("Ycoord").textContent = mouseY;
        }
 
        if (message == "map over" && isShowCompany == false) {
           
            for (var i = 0; i < currentMarkerCoords_localVertex.length; i++) {
                var minX = currentMarkerCoords_localVertex[i].x + 5;
                var maxX = currentMarkerCoords_localVertex[i].x + widthMarker - 7;
                var minY = currentMarkerCoords_localVertex[i].y;
                var maxY = currentMarkerCoords_localVertex[i].y + heightMarker;
                if (mouseX >= minX && mouseX <= maxX && mouseY >= minY && mouseY <= maxY && isShowToolTip == true) {

                    var lenW = currentMarkerCoords_localVertex[i].title.length * 5 + 14;

                    context.fillStyle = "rgba(243,243,243, 0.7)";
                    //context.fillRect(mouseX + 15, mouseY, lenW, 24);
                    roundRect(mouseX + 15, mouseY, lenW, 24, 7);

                    context.fillStyle = "black";
                    context.font = "10pt Calibri";
                    context.fillText(currentMarkerCoords_localVertex[i].title, mouseX, mouseY + 17);

                    test = true;
                }
            }

            if (mouseInMap == false) {

                mouseInMap = true;
                inTime = new Date();
                if (outTime != undefined)
                {
                    var res = inTime - outTime;
                    //document.getElementById("mouseOutL").textContent = res;
                    if (res < 750) {
                        resultOut = true;
                    }
                    else {
                        resultOut = false;
                    }
                }
                drawWithAutoRotateIn();                
            }            
        }
        else if (message == "map MouseOut") {

            if (mouseInMap == true) {

                mouseInMap = false;
                outTime = new Date();
                setTimeout(continueExecution, 3500);
            }            
        }        
    }
}

function drawMarkers() {

    var len = currentMarkerCoords_localVertex.length;
    if (isShowCompany) {
        for (var i = 0; i < len; i++) {
            context.drawImage(imageObj, currentMarkerCoords_localVertex[i].x, currentMarkerCoords_localVertex[i].y);
        }
    }
    else {
        for (var i = 0; i < len; i++) {
            context.drawImage(imageObj2, currentMarkerCoords_localVertex[i].x, currentMarkerCoords_localVertex[i].y);
        }
    }
    if (isShowCompany)
    {
        for (var i = 0; i < currentMarkerCoords_localVertex.length; i++) {

            var lenW = currentMarkerCoords_localVertex[i].title.length * 6 + 3;

            context.fillStyle = "rgba(243,243,243, 0.7)";            
            roundRectBaloon(currentMarkerCoords_localVertex[i].x - lenW / 2 + 12, currentMarkerCoords_localVertex[i].y - 30, lenW, 24, 7);

            context.fillStyle = "black";
            context.font = "10pt Calibri";
            context.fillText(currentMarkerCoords_localVertex[i].title, currentMarkerCoords_localVertex[i].x - lenW / 2 + 2, currentMarkerCoords_localVertex[i].y - 12);
            
        }
    }
}

function roundRectBaloon(x, y, width, height, radius) {
    
    var strW = 5;
    var strH = 8;

    context.beginPath();
    context.moveTo(x + radius, y);
    context.lineTo(x + width - radius, y);
    context.quadraticCurveTo(x + width, y, x + width, y + radius);
    context.lineTo(x + width, y + height - radius);
    context.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);

    context.lineTo(x + width / 2 + strW, y + height);
    context.lineTo(x + width / 2, y + height + strH);
    context.lineTo(x + width / 2 - strW, y + height);

    context.lineTo(x + radius, y + height);
    context.quadraticCurveTo(x, y + height, x, y + height - radius);
    context.lineTo(x, y + radius);
    context.quadraticCurveTo(x, y, x + radius, y);
    context.closePath();
    //context.stroke();
    context.fill();    
}

function roundRect(x, y, width, height, radius) {

    context.beginPath();
    context.moveTo(x + radius, y);
    context.lineTo(x + width - radius, y);
    context.quadraticCurveTo(x + width, y, x + width, y + radius);
    context.lineTo(x + width, y + height - radius);
    context.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    context.lineTo(x + radius, y + height);
    context.quadraticCurveTo(x, y + height, x, y + height - radius);
    context.lineTo(x, y + radius);
    context.quadraticCurveTo(x, y, x + radius, y);
    context.closePath();
    //context.stroke();
    context.fill();
}

function drawWithAutoRotateOut() {

    //angel_X -= 0.2;
    if (angel_X >= -40 && isAutoRotate2 == false) {
        angel_X -= 0.5;
        //isAutoRotate = true;
        isShowToolTip = false;
        prepareCoords(mapCoords_localVertex, mapCoords_transVertex);
        drawRegion(mapCoords_transVertex);        
        context.fillStyle = grd;
        context.fill();
        context.stroke();        
        drawMarkers();
        setTimeout(drawWithAutoRotateOut, 10);
    }
    isShowToolTip = true;
    //isAutoRotate = false;
}

function drawWithAutoRotateIn() {

    //angel_X += 0.2;
    if (angel_X <= 0 && isAutoRotate == false) {
        angel_X += 0.5;
        //isAutoRotate2 = true;
        isShowToolTip = false;
        prepareCoords(mapCoords_localVertex, mapCoords_transVertex);
        drawRegion(mapCoords_transVertex);        
        context.fillStyle = grd;
        context.fill();
        context.stroke();        
        drawMarkers();
        setTimeout(drawWithAutoRotateIn, 10);
    }
    
    //isAutoRotate2 = false;
    isShowToolTip = true;
}

function continueExecution() {
        
    if (mouseInMap == false && resultOut == true) {

        if (mouseX <= 14 || mouseY <= 14 || mouseX >= 650 || mouseY >= 400) {

            var outTime2 = new Date();
            var resOutTime = outTime2 - outTime;            
            if (resOutTime > 2200) {
                drawWithAutoRotateOut();
            }
        }
    }    
}

function prepareCoords(vertex_list, transVertexList) {

    var len = vertex_list.length;

    for (var index = 0; index < len; index++) {

        if (mapCoords_localVertex[index].x == 0 && mapCoords_localVertex[index].y == 0 && mapCoords_localVertex[index].z == 0)
            continue;
        rotate_on_XYZ(transVertexList[index], vertex_list[index]);
        //toCenterCoords(transVertexList[index]);
    }
}

function initCurrentMarkers(markerArray)
{
    currentMarkerCoords_localVertex.length = 0;
    var len = markerArray.length;
    for (var i = 0; i < len; i++)
    {
        currentMarkerCoords_localVertex.push({ x: markerArray[i].x, y: markerArray[i].y, z: markerArray[i].z, title: markerArray[i].title, desc: markerArray[i].desc });
    }
}
