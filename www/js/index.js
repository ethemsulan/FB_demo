var isThereNewCampain=false;


// aeropostale
var icon2=false;
//bananerepuvlic
var icon3=false;
//gap
var icon22=false;                         
//mark spencer
var icon27=false;
// if user exist set true
var is_guest = false;
var lineChartData = {
 labels : ["","","","","","",""],
 datasets : [
 {
 fillColor : "rgba(151,187,205,0.5)",
 strokeColor : "rgba(151,187,205,1)",
 pointColor : "rgba(151,187,205,1)",
 pointStrokeColor : "#fff",
 data : [50,90,140,190,500,750,1050]
 }
 ]
 };
var lat_end = "28.72082";
var lng_end = "77.107241";
var clicked_val;
var pieData = [
    {
        value: 300,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Swiss Otel"
    },
    {
        value: 50,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "GAP"
    },
    {
        value: 100,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Fiba Emeklilik"
    },
    {
        value: 40,
        color: "#949FB1",
        highlight: "#A8B3C5",
        label: "FibaBank"
    },
    {
        value: 120,
        color: "#4D5360",
        highlight: "#616774",
        label: "Mark&Spencers"
    }

];
    var pieOptions = [
{
    //Boolean - Whether we should show a stroke on each segment
    segmentShowStroke : true,
    //String - The colour of each segment stroke
    segmentStrokeColor : "#fff",
    //Number - The width of each segment stroke
    segmentStrokeWidth : 2,
    //Number - The percentage of the chart that we cut out of the middle
    percentageInnerCutout : 50, // This is 0 for Pie charts

    //Number - Amount of animation steps
    animationSteps : 100,
    //String - Animation easing effect
    animationEasing : "easeOutBounce",

    //Boolean - Whether we animate the rotation of the Doughnut
    animateRotate : true,

    //Boolean - Whether we animate scaling the Doughnut from the centre
    animateScale : false,

    //String - A legend template
    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"

}
];		 
var posArray = 
[
    // Aeropostale
     {latitude : '41.044000', longitude : '29.002000', img_url:'img/aeropostale.png', title : 'Zorlu Center', address : '<div>Zorlu Center</div> <div>Ortaköy Mahallesi Koru Sokak No: 2 Zorlu Alışveriş Merkezi Bağımsız Bölüm No: 52 P.K. 34340 Zincirlikuyu Beşiktaş / İSTANBUL TEL: 0212 353 62 44</div>'}
    ,{latitude : '41.077798', longitude : '29.013208', img_url:'img/aeropostale.png', title : 'Zorlu Center Kanyon', address : '<div>Kanyon</div> <div>Kanyon Alışveriş Merkezi Esentepe Mahallesi Büyükdere Caddesi No: 185 Kat: B2 No: 44 34394 Levent / İSTANBUL TEL: 0212 353 07 90</div>'}
    ,{latitude : '41.016667', longitude : '29.033333', img_url:'img/aeropostale.png', title : 'Akasya', address : '<div>Akasya</div> <div>Ankara Devlet Yolu Haydarpaşa Yönü 4.Km Çeçen Sokak Akasya Alışveriş Merkezi 2.Kat No: 515-516 P.K. 34660 Acıbadem Üsküdar/İSTANBUL TEL: 216 999 56 94</div>'}
    ,{latitude : '41.021092', longitude : '29.128453', img_url:'img/aeropostale.png', title : 'Buyaka', address : '<div>Buyaka</div> <div>Buyaka Alışveriş Merkezi Fatih Sultan Mehmet Mahallesi Balkan Caddesi No: 56 /A Buyaka AVM Zemin Kat Mağaza No: 63 Tepeüstü, Ümraniye / İSTANBUL TEL: 0216 290 77 27</div>'}
    ,{latitude : '40.973021', longitude : '28.787398', img_url:'img/aeropostale.png', title : 'Aqua Florya', address : '<div>Aqua Florya</div> <div>Şenlikköy Mahallesi Halkalı Caddesi Aqua AVM No: 93 Alt Zemin kat No: 10 Florya/Bakırköy / İSTANBUL TEL: 0212 574 54 20</div>'}
    ,{latitude : '40.974640', longitude : '29.111513', img_url:'img/aeropostale.png', title : 'Brandium', address : '<div>Brandium</div> <div> Küçükbakkalköy Mahallesi Dudullu Yolu Cad. Erenköy Gümrük Karşısı Brandium AVM Zemin Kat No: Z. 13-14-15 Küçükbakkalköy Ataşehir / İSTANBUL TEL: 0216 572 30 45</div>'}
    ,{latitude : '41.075649', longitude : '28.935397', img_url:'img/aeropostale.png', title : 'Vialand', address : '<div>Vialand</div> <div> Yeşilpınar Mahallesi Şehit Metin Kaya Sokak No: 11 Vialand AVM 2 Zk No: 19 Bağımsız Bölüm P.K. 34065 Eyüp / İSTANBUL TEL: 0212 777 29 71</div>'}
     // Banana Republic
    ,{latitude : '40.977979', longitude : '28.869597', img_url:'img/banana_republic.png', title : 'CAPACITY ALIŞVERIŞ MERKEZI', address : '<div>CAPACITY ALIŞVERIŞ MERKEZI</div> <div>Fişekhane Caddesi Z 21-21/A 34158 Bakırköy İstanbul , Türkiye  Telefon Numarası: 0212 560 2002</div>'}
    ,{latitude : '41.052904', longitude : '29.000478', img_url:'img/banana_republic.png', title : 'CITY\'S NİŞANTAŞI ALIŞVERİŞ MERKEZİ', address : '<div>CITY\'S NİŞANTAŞI ALIŞVERİŞ MERKEZİ</div> <div>City\'s Alışveriş Merkezi, Teşvikiye Caddesi, No:162 Z 34365 Nişantaşı İstanbul, Türkiye  Telefon Numarası: 0212 373 18 40</div>'}
    ,{latitude : '41.077798', longitude : '29.013208', img_url:'img/banana_republic.png', title : 'KANYON ALIŞVERIŞ MERKEZI', address : '<div>KANYON ALIŞVERIŞ MERKEZI</div> <div> Büyükdere Caddesi, Kanyon Alışveriş Merkezi Kat 1B No:106-107-108 34394 Levent İstanbul, Türkiye Telefon Numarası: 0212 353 51 65</div>'}
    ,{latitude : '40.980141', longitude : '29.082270', img_url:'img/banana_republic.png', title : 'PALLADIUM ALIŞVERIŞ MERKEZI', address : '<div>PALLADIUM ALIŞVERIŞ MERKEZI</div> <div>BB-204, Barbaros Mahallesi Halk Cad. 1. Kat BB 204 34746 Kozyatağı / Kadıköy İstanbul, Türkiye  Telefon Numarası: 0216 663 10 74</div>'}
    ,{latitude : '41.167773', longitude : '29.056888', img_url:'img/banana_republic.png', title : 'İSTİNYEPARK ALIŞVERİŞ MERKEZİ', address : '<div>İSTİNYEPARK ALIŞVERİŞ MERKEZİ</div> <div>İstinyepark Alışveriş Merkezi. Pınar Mah.İstinye Bayırı Cad. No: 495 İstinye / Sarıyer-İstanbul Türkiye  Telefon Numarası: 0212 345 63 50-51</div>'}
    // GAP
    ,{latitude : '41.005270', longitude : '28.976960', img_url:'img/gap.png', title : 'İstanbul Akasya', address : '<div>İstanbul Akasya</div> <div>Ankara Devlet Yolu Haydarpaşa Yönü 4.Km Çeçen Sokak Akasya Alışveriş Merkezi Zemin Kat No:348 P.K.34660 Acıbadem Üsküdar İstanbul 0216 999 56 92</div>'}
    ,{latitude : '41.020000', longitude : '28.577500', img_url:'img/gap.png', title : 'İstanbul Akbatı', address : '<div>İstanbul Akbatı</div> <div>Akbatı Alışveriş Merkezi Esenyurt Mah. Kapadık köyü Akbatı Alışveriş Merkezi No. 97-98-99  Büyükçekmece / İSTANBUL Tel. 0 212 397 73 71- 72</div>'}
    ,{latitude : '41.082430', longitude : '29.034522', img_url:'img/gap.png', title : 'İstanbul Akmerkez', address : '<div>İstanbul Akmerkez</div> <div>Akmerkez Ticaret Merkezi Nispetiye Caddesi No. 332-333-334-335 Etiler / Beşiktaş / İSTANBUL Tel. 0212 2820725</div>'}
    ,{latitude : '41.082430', longitude : '29.034522', img_url:'img/gap.png', title : 'İstanbul Akmerkez Kids&Baby', address : '<div>İstanbul Akmerkez Kids&Baby</div> <div>Akmerkez Ticaret Merkezi Nispetiye Caddesi No.108-109 34337 Etiler / Beşiktaş / İSTANBUL Tel. 0212 282 17 17</div>'}
    ,{latitude : '40.977979', longitude : '28.869597', img_url:'img/gap.png', title : 'İstanbul Capacity', address : '<div>İstanbul Capacity</div> <div>Capacity Alışveriş Merkezi Zeytinlik Mah.Fişekhane Cad. No. 34 Zemin Kat Bakırköy / İSTANBUL Tel. 0 212 663 30 36/ 661 71 47-49</div>'}
    ,{latitude : '41.060278', longitude : '28.987778', img_url:'img/gap.png', title : 'İstanbul Cevahir', address : '<div>İstanbul Cevahir</div> <div>Cevahir Alışveriş Merkezi Meşrutiyet mah. Büyükdere cad. No. 22/A/316  Şişli / İSTANBUL Tel. 0 212 380 10 95 - 96</div>'}
    ,{latitude : '41.005270', longitude : '28.976960', img_url:'img/gap.png', title : 'İstanbul City\'s Nişantaşı', address : '<div>İstanbul City\'s Nişantaşı</div> <div>City\'s Nişantaşı Alışveriş Merkezi Teşvikiye Mah. No. 162 1.Kat 103-104 Nişantaşı / İSTANBUL Tel. 0212 373 20 80 / 81</div>'}
    ,{latitude : '41.036944', longitude : '28.977500', img_url:'img/gap.png', title : 'İstanbul Demirören İstiklal', address : '<div>İstanbul Demirören İstiklal</div> <div>Demirören Alışveriş Merkezi Hüseyin Ağa Mah. İstiklal Cad. 1.Kat No. 106-107  Beyoğlu / İSTANBUL Tel. 0 212 292 10 88 - 0 212 292 10 48</div>'}
    ,{latitude : '41.048056', longitude : '28.900278', img_url:'img/gap.png', title : 'İstanbul Forum Kids&Baby', address : '<div>İstanbul Forum Kids&Baby</div> <div>Forum İSTANBUL Alışveriş Merkezi Kocatepe Mah. Paşa Cad. 34045 B1 Blok No. 048 Bayrampaşa / İSTANBUL Tel. 0 212 640 62 19 - 0 212 640 62 38</div>'}
    ,{latitude : '41.167773', longitude : '29.056888', img_url:'img/gap.png', title : 'İstanbul İstinyePark', address : '<div>İstanbul İstinyePark</div> <div>İstinye Park Alışveriş Merkezi, Pınar Mah. İstinye Bayırı cad. Enka Okulları Karşısı ABC Yolu No. 215-216 İstinye / Sarıyer / İSTANBUL Tel. 0 212 345 62 22/4 Hat</div>'}
    ,{latitude : '41.005270', longitude : '28.976960', img_url:'img/gap.png', title : 'İstanbul İstinyePark Kids&Baby', address : '<div>İstanbul İstinyePark Kids&Baby</div> <div>İstinye Park Alışveriş Merk.Pınar Mah. İstinye Bayırı cad. Enka Okulları Karşısı ABC Yolu No. 220-221 İstinye / Sarıyer / İSTANBUL Tel. 0 212 345 62 27/4 Hat</div>'}
    ,{latitude : '41.005270', longitude : '28.976960', img_url:'img/gap.png', title : 'İstanbul Kanyon', address : '<div>İstanbul Kanyon</div> <div>Kanyon Alışveriş Merkezi, Mecidiyeköy Mah.Büyükdere Cad. No. 103-104 Levent / İSTANBUL Tel. 0 212 353 52 05</div>'}
    ,{latitude : '40.977979', longitude : '28.869597', img_url:'img/gap.png', title : 'İstanbul Marmara Forum', address : '<div>İstanbul Marmara Forum</div> <div>Marmara Forum Alışveriş Merkezi M.S Blok No. 010 Osmaniye Mah. Ekrem Kurt Bulvarı E-5 Sahilyolu Bakırköy / İSTANBUL Tel. 0 212 466 69 10-11</div>'}
    ,{latitude : '41.011998', longitude : '29.133249', img_url:'img/gap.png', title : 'İstanbul Meydan', address : '<div>İstanbul Meydan</div> <div>Meydan Alışveriş Merkezi Çakmak Mah. Metro Group Sk. No. 12 34770 Ümraniye / İSTANBUL Tel. 0 216 466 21 53-12-87-54</div>'}
    ,{latitude : '40.983333', longitude : '29.127778', img_url:'img/gap.png', title : 'İstanbul Palladium', address : '<div>İstanbul Palladium</div> <div>Palladium Alışveriş Merkezi Barbaros Mah. Halk Cad.  BB 259- 260 2.Kat 34746 Ataşehir / İSTANBUL Tel. 0 216 663 10 90-91-94</div>'}
    ,{latitude : '41.005270', longitude : '28.976960', img_url:'img/gap.png', title : 'İstanbul Trump Towers Kids&Baby', address : '<div>İstanbul Trump Towers Kids&Baby</div> <div>Trump Alışveriş Merkezi Kuştepe Mah. Mecidiyeköy Yolu Cad. No.12 Mecidiyeköy / İSTANBUL Tel. 0212 275 12 77</div>'}
    ,{latitude : '41.075649', longitude : '28.935397', img_url:'img/gap.png', title : 'İstanbul Vialand', address : '<div>İstanbul Vialand</div> <div>Vialand Alışveriş Merkezi Yeşilpınar Mahallesi Şehit Metin Kaya Sokak Zemin Kat No. 11/79 34065 Eyüp / İSTANBUL Tel. 0212 777 68 72</div>'}
    ,{latitude : '41.044000', longitude : '29.002000', img_url:'img/gap.png', title : 'İstanbul Zorlu Center', address : '<div>İstanbul Zorlu Center</div> <div>Ortaköy Mahallesi Koru sokak No: 2 Zorlu Alışveriş Merkezi Bağımsız Bölüm No: 48 P.K. 34340 Zincirlikuyu Beşiktaş İstanbul Tel: 0212 3536139</div>'}
  
                    
];

$('#div_loc_list li').live('click', function() {
    clicked_val = $(this).text().trim();
    for (var i=0; i < posArray.length; i++) {
        if (posArray[i].title.trim() == clicked_val) {
            lat_end = posArray[i].latitude;
            lng_end = posArray[i].longitude;
            app.fnc_direction_map();
            break;
        };
    };
    
    
});
            

function initPushwoosh() {
    var pushNotification = window.plugins.pushNotification;
    if(device.platform == "Android")
    {
        registerPushwooshAndroid();
    }

    if(device.platform == "iPhone" || device.platform == "iOS")
    {
        registerPushwooshIOS();
    }
};


var app = {
	// Application Constructor
	initialize : function() {
		console.log("init");
		this.bindEvents();
		app.url="http://10.0.0.31:8080/fiba_group_webservices/";
		app.total_points=0;
		app.url="http://213.74.186.114:8181/fiba_group_webservices/";
		//app.first_init();
	},
	// Bind Event Listeners
	//
	// Bind any events that are required on startup. Common events are:
	// 'load', 'deviceready', 'offline', and 'online'.
	bindEvents : function() {
		console.log("bindevent");
		document.addEventListener('deviceready', this.onDeviceReady, false);
                            
	},
	onDeviceReady : function() {
		console.log("ondevice ready");
		app.receivedEvent('deviceready');
		
		app.first_init();
	
	},
	fnc_face_to_face:function(){
      var xmlhttp=new XMLHttpRequest();
      xmlhttp.open("GET", "https://opentokrtc.com/cordova.json", false);
      xmlhttp.send();
      var data = JSON.parse( xmlhttp.response );

      // Very simple OpenTok Code for group video chat
      var publisher = TB.initPublisher(data.apiKey,'myPublisherDiv');

      var session = TB.initSession( data.apiKey, data.sid ); 
      session.on({
        'streamCreated': function( event ){
            var div = document.createElement('div');
            div.setAttribute('id', 'stream' + event.stream.streamId);
            document.body.appendChild(div);
            session.subscribe( event.stream, div.id, {subscribeToAudio: false} );
        }
      });
      session.connect(data.token, function(){
        session.publish( publisher );
      });
    },
    fnc_location_list : function() {

         $("#div_loc_list ul").page('destroy').page();
        var list_content ='';
        for (var i=0; i < posArray.length; i++) {
                var ltitle = posArray[i].title;
                list_content += '<li><a href="#direction_page">'+ltitle+'</a></li>';
         }
        $('#div_loc_list').append('<ul data-role="listview">'+list_content+'</ul>');
         
        app.check_campains();
    },
    fnc_direction_map :  function(){
         $.mobile.changePage($('#direction_page'));
         
        var onGeoSuccess = function(position) {
            console.log(position);
        
            var location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            
            google.maps.visualRefresh = true;

            var mapOptions = {
                zoom : 13,
                center : location,
                rotateControl : false,
                streetViewControl : false,
                mapTypeControl : false,
                draggable : true,
                mapTypeId : google.maps.MapTypeId.ROADMAP
            };
            var map_name = "map_direction";
            var map_direction = new google.maps.Map(document.getElementById(map_name), mapOptions);
            //     current location manuel change default image
            var image = {
                url : 'img/aaa.gif',
                size : new google.maps.Size(38, 38),
                //size : new google.maps.Size(10, 10),
                origin : new google.maps.Point(0, 0),
                // The anchor for this image is the base of the flagpole at 0,32.
                anchor : new google.maps.Point(19, 19)
                //anchor : new google.maps.Point(5, 5)
            };
            var currentLocationMarker = new google.maps.Marker({
                position : location,
                map : map_direction,
                bounds : false,
                title : 'Buradasınız',
                icon : image,
                //shape : shape,
                optimized : false
                //animation : google.maps.Animation.BOUNCE
            });
//      current location add label and listener
            setCurrentLocationMessage(currentLocationMarker);
            function setCurrentLocationMessage(marker) {
              var message = "<div>Buradasınız</div>";
              var infowindow = new google.maps.InfoWindow({
                content: message
              });
            
              google.maps.event.addListener(marker, 'click', function() {
                infowindow.open(map_direction, marker);
              });
            }
//      end current location add label and listener
        
//         start direction

            var start = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

            /*
            $('#div_loc_list li').live('click', function() {
                clicked_val = $(this).text().trim();
                for (var i=0; i < posArray.length; i++) {
                    if (posArray[i].title.trim() == clicked_val) {
                        lat_end = posArray[i].latitude;
                        lng_end = posArray[i].longitude;
                    };
                };
            });
             */
            
            var end = new google.maps.LatLng(lat_end,lng_end);
            
            var directionsService = new google.maps.DirectionsService();
            var directionsDisplay = new google.maps.DirectionsRenderer(); 

            directionsDisplay.setMap(map_direction); 
            var request = { 
                origin: start, 
                destination: end, 
                travelMode: google.maps.DirectionsTravelMode.DRIVING 
            };
            directionsService.route(request, function(response, status){ 
                if (status == google.maps.DirectionsStatus.OK) 
                { 
                    directionsDisplay.setDirections(response); 
                } 
            }); 
            
            
//          end direction
        };
        

        
        var onGeoFail = function(error) {
            console.log(error);
        };
        
        navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoFail, {
            enableHighAccuracy : true
        });
    },
	// start login
	//google map start
	// onSuccess: function(position){
        // var longitude = position.coords.longitude;
        // var latitude = position.coords.latitude;
        // var latLong = new google.maps.LatLng(latitude, longitude);
//  
        // var mapOptions = {
            // center: latLong,
            // zoom: 13,
            // mapTypeId: google.maps.MapTypeId.ROADMAP
        // };
//  
        // var map = new google.maps.Map(document.getElementById("map"), mapOptions);
//     
        // var marker = new google.maps.Marker({
              // position: latLong,
              // map: map,
              // title: 'my location'
          // });
    // },
//     
    // onError: function(error){
        // alert("the code is " + error.code + ". \n" + "message: " + error.message);
    // },
    //google map end
	// Update DOM on a Received Event
	receivedEvent : function(id) {
		console.log("receive event");
		$.mobile.touchOverflowEnabled = false;
		$.mobile.defaultPageTransition = 'flip';
		$.mobile.defaultDialogTransition = 'none';
		$.mobile.transitionFallbacks.slide = 'none';
		$.mobile.transitionFallbacks.pop = 'none';
		$.mobile.buttonMarkup.hoverDelay = 0;
		
		//checkConnection();
	},
	productList : null,
	fnc_Barkod : function() {
				$("#un_barkod").empty();
		        $("#un_barkod").append(app.user_name);
		        app.check_campains();
	},	
	fnc_Puanlarim : function() {
				$("#un_puanlarim").empty();
		        $("#un_puanlarim").append(app.user_name);
		        console.log("puanlarım 1");
		$.ajax({
			url : app.url+"GetAcitivies?member_id="+app.id,
			dataType : "json",
			success : function(a, b, c) {
				console.log("puanlarım 2");
				$('#div_puanlarim ul').remove();
				$('#div_puanlarim').append('<ul data-role="listview"></ul>');
				listItems = $('#div_puanlarim').find('ul');
				console.log("puanlarım 3");
				 
				
				for (var i = 0; i < a.length; i++) {
				html ="<table style='width:100%'>";
					console.log("puanlarım 4");
					html += '<tr><td width="50%">'+ a[i].company_name+ '</td>';
					html += '<td width="30%">' + a[i].activity_date + '</td>';
					html += '<td width="20%">' + a[i].points + '</td></tr>';
				    html+="</table>";
					listItems.append('<li id="prj_' + a[i].activity_id + '">' + html + '</li>');
				};
				
				$('#div_puanlarim ul').listview();
				console.log("puanlarım 5");
				for (var i = 0; i < a.length; i++) {
					console.log("puanlarım 6");
					$('#prj_' + a[i].activity_id).bind('tap',
					function(event, ui) {
						var strID = $(this).attr('id').replace('prj_','');
						app.getProductsDetay(strID);
					});
				}

		    },
			error : function(a, b, c) {
				$("#device_info").append('hata aldı '+ '<br />');
				element2.innerHTML = "hata username:";

				console.log("err a ", a);
				console.log("err b ", b);
				console.log("err c ", c);
				console.log("err c ", c);
			}
		});
		app.check_campains();
	},	
	
	fnc_Mesajlar : function() {
				$("#un_mesajlar").empty();
		        $("#un_mesajlar").append(app.user_name + "("+app.total_points+")");
        $.ajax({
            url : app.url+"GetCampains?member_id="+app.id,
            dataType : "json",
            success : function(a, b, c) {
                console.log("kampanyalar");
                $('#div_mesajlar ul').remove();
                $('#div_mesajlar').append('<ul data-role="listview"></ul>');
                listItems = $('#div_mesajlar').find('ul');
                console.log("div_mesajlar 3");
                 
                    html ="<table style='width:100%'>";
                    html += '<tr><td width="25%"> Şirket Adı </td>';
                    html += '<td width="30%"> Kampanya </td>';
                    html += '<td width="15%">İndirim Oranı</td>';
                    //html += '<td width="15%">' + a[i].startdate + '</td>';
                    html += '<td width="15%"> Kampanya Bitiş Tarihi</td></tr>';
                    html += '<td > Yeni</td></tr>';
                    html+="</table>";
                    listItems.append('<li id="prj_header">' + html + '</li>');
                for (var i = 0; i < a.length; i++) {
                    if (a[i].isread=="0")
                    html ="<table style='width:100%' bgcolor='#00FF00'>";
                    else
                    html ="<table style='width:100%'>";
                    
                    console.log("div_mesajlar 4");
                    html += '<tr><td width="25%">'+ a[i].company_name+ '</td>';
                    html += '<td width="30%">' + a[i].campain_name + '</td>';
                    html += '<td width="15%">' + a[i].discount + '</td>';
                    //html += '<td width="15%">' + a[i].startdate + '</td>';
                    html += '<td width="15%">' + a[i].expiredate + '</td></tr>';
                    html+="</table>";
                    listItems.append('<li id="camp_' + a[i].campain_id + '">' + html + '</li>');
                };
                
                $('#div_mesajlar ul').listview();
                console.log("div_mesajlar 5");
                for (var i = 0; i < a.length; i++) {
                    console.log("div_mesajlar 6");
                    $('#camp_' + a[i].campain_id).bind('tap',
                    function(event, ui) {
        
                    $.ajax({
                        url : app.url+"GetCampains?conn_type=setread_campain_all&member_id="+app.id,
                        dataType : "json",
                        success : function(a, b, c) {
                            console.log("kampanyalar update");
                            app.check_campains();
                            $.mobile.changePage($('#barkod'));
                        },
                        error : function(a, b, c) {
                            console.log("err a ", a);
                            console.log("err b ", b);
                            console.log("err c ", c);
                            console.log("err c ", c);
                        }
                    }); 
        
                    });
                }
                
            },
            error : function(a, b, c) {
                $("#device_info").append('hata aldı '+ '<br />');
                element2.innerHTML = "hata username:";

                console.log("err a ", a);
                console.log("err b ", b);
                console.log("err c ", c);
                console.log("err c ", c);
            }
        });         
        
       
        app.check_campains();
	},	
	fnc_message : function() {
	    console.log("first click guest message: "+app.id);
        $.ajax({
            url : app.url+"GetCampains?member_id="+app.id,
            dataType : "json",
            success : function(a, b, c) {
                console.log("kampanyalar");
                $('#div_messages_gs ul').remove();
                $('#div_messages_gs').append('<ul data-role="listview"></ul>');
                listItems = $('#div_messages_gs').find('ul');
                console.log("div_messages_gs 3");
                 
                    html ="<table style='width:100%'>";
                    html += '<tr><td width="25%"> Şirket Adı </td>';
                    html += '<td width="30%"> Kampanya </td>';
                    html += '<td width="15%">İndirim Oranı</td>';
                    //html += '<td width="15%">' + a[i].startdate + '</td>';
                    html += '<td width="15%"> Kampanya Bitiş Tarihi</td></tr>';
                    html += '<td > Yeni</td></tr>';
                    html+="</table>";
                    listItems.append('<li id="prj_header_g">' + html + '</li>');
                for (var i = 0; i < a.length; i++) {
                    if (a[i].isread=="0")
                    html ="<table style='width:100%'>";
                    else
                    html ="<table style='width:100%'>";
                    
                    console.log("div_messages_gs 4");
                    html += '<tr><td width="25%">'+ a[i].company_name+ '</td>';
                    html += '<td width="30%">' + a[i].campain_name + '</td>';
                    html += '<td width="15%">' + a[i].discount + '</td>';
                    //html += '<td width="15%">' + a[i].startdate + '</td>';
                    html += '<td width="15%">' + a[i].expiredate + '</td></tr>';
                    html+="</table>";
                    listItems.append('<li id="g_camp_' + a[i].campain_id + '">' + html + '</li>');
                };
                
                $('#div_messages_gs ul').listview();
                console.log("div_messages_gs 5");
                for (var i = 0; i < a.length; i++) {
                    console.log("div_messages_gs 6");
                    $('#g_camp_' + a[i].campain_id).bind('tap',
                    function(event, ui) {
        
                    $.ajax({
                        url : app.url+"GetCampains?conn_type=setread_campain_all&member_id="+app.id,
                        dataType : "json",
                        success : function(a, b, c) {
                            console.log("kampanyalar update");
                            app.check_campains();
                            $.mobile.changePage($('#g_messages'));
                        },
                        error : function(a, b, c) {
                            console.log("err a ", a);
                            console.log("err b ", b);
                            console.log("err c ", c);
                            console.log("err c ", c);
                        }
                    }); 
        
                    });
                }
                
            },
            error : function(a, b, c) {
                $("#device_info").append('hata aldı '+ '<br />');
                element2.innerHTML = "hata username:";

                console.log("err a ", a);
                console.log("err b ", b);
                console.log("err c ", c);
                console.log("err c ", c);
            }
        });         
        
       
        // app.check_campains();
    },  
    fnc_Profil : function() {
				$("#un_profil").empty();
		        $("#un_profil").append(app.user_name+ "("+app.total_points+")");
		        $("#txt_isim").val(app.name +" "+ app.surname);
		        $("#tx_tckn").val(app.identityno);
		        $("#txt_dogumtarihi").val(app.birthdate);
				$("#txt_cep_tel").val(app.mobile);
				$("#txt_email").val(app.email);
				$("#txt_adres").val(app.address_text);
				if(app.allow_email==1)
				$('#chk_mail').Attr('checked',true);
				else
				$('#chk_mail').Attr('checked',false);
				
				if(app.allow_sms==1)
				$('#chk_sms').Attr('checked',true);
				else
				$('#chk_sms').Attr('checked',false);
                app.check_campains();
	},
	fnc_Kampanyalar : function() {
                if (is_guest == false) {
                    $("#un_kampanyalar").empty();
                    $("#un_kampanyalar").append(app.user_name+ "("+app.total_points+")");
                };
		        
		        app.check_campains();
	},			
	fnc_Istatistik : function() {
				$("#un_istatistik").empty();
		        $("#un_istatistik").append(app.user_name+ "("+app.total_points+")");
		        
		        app.check_campains();
	},
	fnc_EnYakin : function() {
				// $("#map").empty();
		        // $("#map").append(app.user_name+ "("+app.total_points+")");
		        
		        app.check_campains();
	},			
	member_savefunc : function() {
	},	
	getMusteriler : function(){
	
	},
	isnull : function(p){
		if (p ==null)
		return '.';
		else
		return p;
	},
	first_init : function(){
		app.uuid = app.isnull(device.uuid);
		//if (app.uuid==".")
		//app.uuid="586BC0F6-09DC-44FB-8F1D-A3ABCB8E0C80";
		app.user_name="Merhaba : Ayşe Balcı";
		app.user_id="90910000001";
		app.id="123456789";

		$("#un_barkod").empty();
		$("#un_barkod").append(app.user_name);

		$("#un_barkod2").empty();
		$("#un_barkod2").append(app.user_name);

		new Chart(document.getElementById("pie").getContext("2d")).Pie(pieData,pieOptions);
		// new Chart(document.getElementById("line").getContext("2d")).Line(lineChartData);

		$.ajax({
			url : app.url+"GetAcitivies?member_id="+app.id+"&conType=totalpoint",
			dataType : "json",
			success : function(a, b, c) {
					app.total_points=a[0].total_point;
					$("#un_barkod").empty();
					$("#un_barkod").append(app.user_name+ "("+app.total_points+")");					
			},
			error : function(a, b, c) {
				$("#device_info").append('hata aldı '+ '<br />');
				element2.innerHTML = "hata username:";

				console.log("err a ", a);
				console.log("err b ", b);
				console.log("err c ", c);
				console.log("err c ", c);
			}
		});
		
		
		
		//if(app.name==null)
		{
		$.ajax({			
			url : app.url+"GetMember?member_id="+app.id,
			dataType : "json",
			success : function(a, b, c) {
				{
				  app.identityno=a[0].identityno;
				  app.name=a[0].name;
				  app.surname=a[0].surname;
				  app.birthdate=a[0].birthdate;
				  app.Birth_place=a[0].Birth_place;
				  app.address_type=a[0].address_type;
				  app.address_text=a[0].address_text;
				  app.city_id=a[0].city_id;
				  app.allow_email=a[0].allow_email;
				  app.allow_sms=a[0].allow_sms;
				  app.mobile=a[0].mobile;
				  app.work_phone=a[0].work_phone;
				  app.home_phone=a[0].home_phone;
				  app.fax=a[0].fax;
				  app.email=a[0].email;
				  app.user_name ="Merhaba : " + a[0].name + " " + a[0].surname;
				  				  
				 }
				//else
				//  $("#device_info").append('Kullanıcı tanımınız yapılmamıştır. Lütfen yöneticinize danışınız ');
			},
			error : function(a, b, c) {
				$("#device_info").append('hata aldı '+ '<br />');
				element2.innerHTML = "hata username:";

				console.log("err a ", a);
				console.log("err b ", b);
				console.log("err c ", c);
				console.log("err c ", c);
			}
		});
		}


	},
    check_campains : function(){
        $.ajax({
            url : app.url+"GetCampains?member_id="+app.id,
            dataType : "json",
            success : function(a, b, c) {
                console.log("kampanyalar");
                isThereNewCampain=false;
                for (var i = 0; i < a.length; i++) {
                    if ((a[i].isread=="0") || (a[i].isread=="null"))
                    {
                        isThereNewCampain=true;
                        if (a[i].company_id=="2") // aeropostale
                          icon2=true;
                        if (a[i].company_id=="3") //bananerepuvlic
                          icon3=true;
                        if (a[i].company_id=="22") //gap
                          icon22=true;                        
                        if (a[i].company_id=="27") //mark spencer
                          icon27=true;                        
                    }
                    
            // aeropostale
            if (icon2)
            {
                    console.log($("#icon2").attr('src'));
                    $("#icon2").attr("src","img/company_icons/2_.jpg");
            }
            
            //bananerepuvlic
            if (icon3)
            {
                    console.log($("#icon3").attr('src'));
                    $("#icon3").attr("src","img/company_icons/3_.jpg");
            }
            //gap
            if (icon22)
            {
                    console.log($("#icon22").attr('src'));
                    $("#icon22").attr("src","img/company_icons/22_.jpg");
            }                         
            //mark spencer
            if (icon27)
            {
                    console.log($("#icon27").attr('src'));
                    $("#icon27").attr("src","img/company_icons/27_.jpg");
            }
        
        
            if (isThereNewCampain)
            {
                console.log($("#img_msg").attr('src'));
                $("#img_msg").attr("src","img/menu_icons/3_Message_y.png");
                
                $("#img_msg_loc").attr("src","img/menu_icons/3_Message_y.png");
                console.log($("#img_camp").attr('src'));
                $("#img_camp").attr("src","img/menu_icons/5_Campaign_y.png");
        
                $("#img_msg_map_section").attr("src","img/menu_icons/5_Campaign_y.png");
        
                $("#img_camp_loc").attr("src","img/menu_icons/5_Campaign_y.png");
         
         
                console.log($("#img_msg1").attr('src'));
                $("#img_msg1").attr("src","img/menu_icons/3_Message_y.png");
        
                console.log($("#img_camp1").attr('src'));
                $("#img_camp1").attr("src","img/menu_icons/5_Campaign_y.png");
        
        
                console.log($("#img_msg3").attr('src'));
                $("#img_msg3").attr("src","img/menu_icons/3_Message_y.png");
        
                console.log($("#img_camp3").attr('src'));
                $("#img_camp3").attr("src","img/menu_icons/5_Campaign_y.png");
        
                
                console.log($("#img_msg5").attr('src'));
                $("#img_msg5").attr("src","img/menu_icons/3_Message_y.png");
        
                console.log($("#img_camp5").attr('src'));
                $("#img_camp5").attr("src","img/menu_icons/5_Campaign_y.png");
        
        
                console.log($("#img_msg6").attr('src'));
                $("#img_msg6").attr("src","img/menu_icons/3_Message_y.png");
        
                console.log($("#img_camp6").attr('src'));
                $("#img_camp6").attr("src","img/menu_icons/5_Campaign_y.png");
        
            }
            else
            {       
                console.log($("#img_msg").attr('src'));
                $("#img_msg").attr("src","img/menu_icons/3_Message.png");
        
                console.log($("#img_camp").attr('src'));
                $("#img_camp").attr("src","img/menu_icons/5_Campaign.png");
        
        
                console.log($("#img_msg1").attr('src'));
                $("#img_msg1").attr("src","img/menu_icons/3_Message.png");
        
                console.log($("#img_camp1").attr('src'));
                $("#img_camp1").attr("src","img/menu_icons/5_Campaign.png");
        
        
                console.log($("#img_msg3").attr('src'));
                $("#img_msg3").attr("src","img/menu_icons/3_Message.png");
        
                console.log($("#img_camp3").attr('src'));
                $("#img_camp3").attr("src","img/menu_icons/5_Campaign.png");
        
                
                console.log($("#img_msg5").attr('src'));
                $("#img_msg5").attr("src","img/menu_icons/3_Message.png");
        
                console.log($("#img_camp5").attr('src'));
                $("#img_camp5").attr("src","img/menu_icons/5_Campaign.png");
        
        
                console.log($("#img_msg6").attr('src'));
                $("#img_msg6").attr("src","img/menu_icons/3_Message.png");
        
                console.log($("#img_camp6").attr('src'));
                $("#img_camp6").attr("src","img/menu_icons/5_Campaign.png");
        
            }
            };
            },
            error : function(a, b, c) {
                console.log("err a ", a);
                console.log("err b ", b);
                console.log("err c ", c);
                console.log("err c ", c);
            }
        });     
    },  	
	insertfunc : function() {
		console.log("save func");
		var result= $("#sel_personels_yeni option:selected").val();
		var v_sel_company_yeni= $("#sel_company_yeni option:selected").val();
		var v_sel_activity_yeni= $("#sel_activity_yeni option:selected").val();
		var v_sel_activity_type_yeni= $("#sel_activity_type_yeni option:selected").val();
		var v_sel_activity_status_yeni= $("#sel_activity_status_yeni option:selected").val();
		var desc= $("#userDesc_yeni").val();
		//if(app.status==null)
		{
		$.ajax({			
			url : app.url+"/istakip_yesis_webservices/GetMyActivities?android_id="+app.uuid+"&jsonType=1&con_type=insertactivity"+
			"&temp_status_id="+v_sel_activity_status_yeni+
			"&temp_assignto="+result + "&desc=" + desc +
			"&temp_activity_type_id="+v_sel_activity_yeni +
			"&temp_activity_property_id="+v_sel_activity_type_yeni +
			"&temp_company_id="+v_sel_company_yeni,
			dataType : "json",
			success : function(a, b, c) {
			app.kaydettimi=a;			
			$.mobile.changePage($('#benim'));
			app.getProducts2();
			},
			error : function(a, b, c) {
				console.log("err a ", a);
				console.log("err b ", b);
				console.log("err c ", c);
				console.log("err c ", c);
			}
		});
		}		
	},	
	savefunc : function() {
		console.log("save func");
		var result= $("#sel_personels option:selected").val();
		var result2= $("#sel_status option:selected").val();
		var desc= $("#userDesc").val();
		//if(app.status==null)
		{
		$.ajax({			
			url : app.url+"/istakip_yesis_webservices/GetMyActivities?android_id="+app.uuid+"&jsonType=1&con_type=updateactivity&temp_activity_type_id="+app.id+"&temp_status_id="+result2+"&temp_assignto="+result + "&desc=" + desc,
			dataType : "json",
			success : function(a, b, c) {
			app.status=a;			
			$.mobile.changePage($('#benim'));
			app.getProducts2();
			},
			error : function(a, b, c) {
				console.log("err a ", a);
				console.log("err b ", b);
				console.log("err c ", c);
				console.log("err c ", c);
			}
		});
		}				
	}, 
	loginguest : function() {
        $.mobile.changePage("#g_campaign");    
        is_guest = true;
    },
    loginfnc : function() {
        is_guest = false;
        console.log("login form");
        var username = $("#username").val();
        var password = $("#password").val();
        
        $.ajax({            
            url : app.url+"GetMember?username="+username+"&password="+password+ "&deviceid="+gtech_token,
            dataType : "json",
            success : function(a, b, c) {         
           // $.mobile.changePage("#login");
                if (a != null && a.length > 0) {
                    if (a[0].status == 'ok') {
                        $.mobile.changePage("#barkod");
                    }else{
                        alert("Lütfen kullanıcı adı ve şifrenizi doğru giriniz!");
                        $('#username').removeAttr('value');
                        $('#password').removeAttr('value'); 
                    }
               }else{
                    alert("Kullanıcı adı bulunamadı!");
                    $('#username').removeAttr('value');
                    $('#password').removeAttr('value'); 
               }
            },
            error : function(a, b, c) {
                console.log("err a ", a);
                console.log("err b ", b);
                console.log("err c ", c);
                console.log("err c ", c);
            }
        });             
    },
	openCamera : function() {
		var onCamSuccess = function(imageData) {
			/* No action required */
		};

		var onCamFail = function(error) {
			/* No action required */
			//alert('Kamera kullanılamıyor (' + error.code + ')');
		};

		var cameraPopoverHandle = navigator.camera.getPicture(onCamSuccess, onCamFail, {
			quality : 25,
			allowEdit : false,
			sourceType : Camera.PictureSourceType.CAMERA,
			destinationType : Camera.DestinationType.DATA_URL,
			encodingType : Camera.EncodingType.JPEG,
			cameraDirection : Camera.Direction.FRONT,
			targetWidth : 80,
			targetHeight : 80,
			saveToPhotoAlbum : false
		});
	},

	detectCurrentLocation : function() {
        var onGeoSuccess = function(position) {
            console.log(position);
        
            var location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            
            google.maps.visualRefresh = true;

            var mapOptions = {
                zoom : 13,
                center : location,
                rotateControl : false,
                streetViewControl : false,
                mapTypeControl : false,
                draggable : true,
                mapTypeId : google.maps.MapTypeId.ROADMAP
            };
            var map_name = "map";
            if (is_guest) {
                map_name = "guest_map";
            };
            var map = new google.maps.Map(document.getElementById(map_name), mapOptions);
            //     current location manuel change default image
            var image = {
                url : 'img/aaa.gif',
                size : new google.maps.Size(38, 38),
                //size : new google.maps.Size(10, 10),
                origin : new google.maps.Point(0, 0),
                // The anchor for this image is the base of the flagpole at 0,32.
                anchor : new google.maps.Point(19, 19)
                //anchor : new google.maps.Point(5, 5)
            };
            var currentLocationMarker = new google.maps.Marker({
                position : location,
                map : map,
                bounds : false,
                title : 'Buradasınız',
                icon : image,
                //shape : shape,
                optimized : false
                //animation : google.maps.Animation.BOUNCE
            });
//      current location add label and listener
            setCurrentLocationMessage(currentLocationMarker);
            function setCurrentLocationMessage(marker) {
              var message = "<div>Buradasınız</div>";
              var infowindow = new google.maps.InfoWindow({
                content: message
              });
            
              google.maps.event.addListener(marker, 'click', function() {
                infowindow.open(map, marker);
              });
            }
//      end current location add label and listener

//      start manuel position
        createMaker(map);
//end manuel position
        
        };

        var onGeoFail = function(error) {
            console.log(error);
        };
        
        navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoFail, {
            enableHighAccuracy : true
        });
    },
    mapLoaded : function() {
        console.log("mapLoaded");
        app.detectCurrentLocation();
    }
        
};



function createMaker(map){


            
            for (var i=0; i < posArray.length; i++) {
                var latitude = posArray[i].latitude;
                var longitude = posArray[i].longitude;
                var title = posArray[i].title;
                var address = posArray[i].address;
                var img_url = posArray[i].img_url;
                
                var aeropostaleZorluCenter = new google.maps.LatLng(latitude, longitude);
                var zorluCenterMarker = new google.maps.Marker({
                position : aeropostaleZorluCenter,
                map : map,
                bounds : false,
                title : title,
                icon : img_url,
                //shape : shape,
                optimized : false
                //animation : google.maps.Animation.BOUNCE
                });
                createMarker(zorluCenterMarker,address);
                function createMarker(marker,message) {
                    var infowindow = new google.maps.InfoWindow({
                        content: message
                    });
                    google.maps.event.addListener(marker, 'click', function() {
                        infowindow.open(map, marker);
                    });
                }
            };
            
            
};
