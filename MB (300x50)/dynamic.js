var ExitURL;

// If true, start function. If false, listen for INIT.
window.onload = function() {
  if (Enabler.isInitialized()) {
    enablerInitHandler();
  } else {
    Enabler.addEventListener(studio.events.StudioEvent.INIT,
      enablerInitHandler);
  }
}

function appendTracking() {
  var suffix_str = Enabler.getParameter('exit_suffix');
  for (profiles in dynamicContent) {
    if (profiles != "_profileid") {
      for (key in dynamicContent[profiles]) {
        var dynamicObj = dynamicContent[profiles][0];
        var symbol = (dynamicObj.Exit.Url.indexOf('?') != -1) ? '&' : '?';
        dynamicObj.Exit.Url += symbol + suffix_str;
      }
    }
  }
}

function enablerInitHandler() {
  if (Enabler.isPageLoaded()) {
    pageLoadedHandler();
  } else {
    Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, pageLoadedHandler);
  }

  Enabler.setProfileId(1077844);
  var devDynamicContent = {};

  devDynamicContent.Prospecting_Sheet1 = [{}];
  devDynamicContent.Prospecting_Sheet1[0]._id = 0;
  devDynamicContent.Prospecting_Sheet1[0].Background_Image = {};
  devDynamicContent.Prospecting_Sheet1[0].Background_Image.Type = "file";
  devDynamicContent.Prospecting_Sheet1[0].Background_Image.Url = "https://s0.2mdn.net/ads/richmedia/studio/42300506/Placeholder.png";
  devDynamicContent.Prospecting_Sheet1[0].Image1 = {};
  devDynamicContent.Prospecting_Sheet1[0].Image1.Type = "file";
  devDynamicContent.Prospecting_Sheet1[0].Image1.Url = "https://s0.2mdn.net/preview/CgkIARDopY68jysSGQCkoPPIkfiHXpxN8UaTgNaCm99hJSKVA-Q/ads/richmedia/studio/28790372/28790372_20161206044944584_Sleep_In_hq.png";
  devDynamicContent.Prospecting_Sheet1[0].Image2 = {};
  devDynamicContent.Prospecting_Sheet1[0].Image2.Type = "file";
  devDynamicContent.Prospecting_Sheet1[0].Image2.Url = "https://s0.2mdn.net/preview/CgkIARDIiY28jysSGQCkoPPIvvZL9vwkUSeJe0sj4tx8K2CTpG8/ads/richmedia/studio/28790372/28790372_20161206090445770_Binoculars.png";
  devDynamicContent.Prospecting_Sheet1[0].Image3 = {};
  devDynamicContent.Prospecting_Sheet1[0].Image3.Type = "file";
  devDynamicContent.Prospecting_Sheet1[0].Image3.Url = "https://s0.2mdn.net/preview/CgkIARC4r5C8jysSGQCkoPPI1257c39ouoggAUQbe4r8jH-Rni8/ads/richmedia/studio/28790372/28790372_20161206042705656_Sentido_hq.png";
  devDynamicContent.Prospecting_Sheet1[0].Image4 = {};
  devDynamicContent.Prospecting_Sheet1[0].Image4.Type = "file";
  devDynamicContent.Prospecting_Sheet1[0].Image4.Url = "https://s0.2mdn.net/preview/CgkIARDghIy8jysSGQCkoPPInkKbzAM5J943mxAzwKq58DK4_OE/ads/richmedia/studio/28790372/28790372_20161206090756286_400_Off_hq.png";
  devDynamicContent.Prospecting_Sheet1[0].Image5 = {};
  devDynamicContent.Prospecting_Sheet1[0].Image5.Type = "file";
  devDynamicContent.Prospecting_Sheet1[0].Image5.Url = "https://s0.2mdn.net/preview/CgkIARC4rJG8jysSGQCkoPPIpWpM_bSSs01gq9DYC4DnpeRL-cg/ads/richmedia/studio/28790372/28790372_20161206042721403_Winter50_hq.png";
  devDynamicContent.Prospecting_Sheet1[0].Brand_Message1 = "";
  devDynamicContent.Prospecting_Sheet1[0].Brand_Message2 = "";
  devDynamicContent.Prospecting_Sheet1[0].Search_Frame2 = "";
  devDynamicContent.Prospecting_Sheet1[0].Destination_Frame2 = "";
  devDynamicContent.Prospecting_Sheet1[0].Hotel_Frame2 = "";
  devDynamicContent.Prospecting_Sheet1[0].Resort_Frame2 = "";
  devDynamicContent.Prospecting_Sheet1[0].From_Frame2 = "";
  devDynamicContent.Prospecting_Sheet1[0].Price_Frame2 = "";
  devDynamicContent.Prospecting_Sheet1[0].Search_Frame3 = "";
  devDynamicContent.Prospecting_Sheet1[0].Destination_Frame3 = "";
  devDynamicContent.Prospecting_Sheet1[0].Hotel_Frame3 = "";
  devDynamicContent.Prospecting_Sheet1[0].Resort_Frame3 = "";
  devDynamicContent.Prospecting_Sheet1[0].From_Frame3 = "";
  devDynamicContent.Prospecting_Sheet1[0].Price_Frame3 = "";
  devDynamicContent.Prospecting_Sheet1[0].CTA = "";
  devDynamicContent.Prospecting_Sheet1[0].Exit = {};
  devDynamicContent.Prospecting_Sheet1[0].Exit.Url = "https://www.thomascook.com";
  Enabler.setDevDynamicContent(devDynamicContent);
  
  document.getElementById('backgroundImage').src = decodeURI(dynamicContent.Prospecting_Sheet1[0].Background_Image.Url);
  document.getElementById('altImage1').src = decodeURI(dynamicContent.Prospecting_Sheet1[0].Image1.Url);
  document.getElementById('altImage2').src = decodeURI(dynamicContent.Prospecting_Sheet1[0].Image2.Url);
  document.getElementById('altImage3').src = decodeURI(dynamicContent.Prospecting_Sheet1[0].Image3.Url);
  document.getElementById('altImage4').src = decodeURI(dynamicContent.Prospecting_Sheet1[0].Image4.Url);
  document.getElementById('altImage5').src = decodeURI(dynamicContent.Prospecting_Sheet1[0].Image5.Url);

  document.getElementById('t1f1').innerHTML = dynamicContent.Prospecting_Sheet1[0].Brand_Message1;
  document.getElementById('t2f1').innerHTML = dynamicContent.Prospecting_Sheet1[0].Brand_Message2;

  document.getElementById('t1sf2').innerHTML = dynamicContent.Prospecting_Sheet1[0].Search_Frame2;
  document.getElementById('t1df2').innerHTML = dynamicContent.Prospecting_Sheet1[0].Destination_Frame2;
  document.getElementById('t2f2').innerHTML = dynamicContent.Prospecting_Sheet1[0].Hotel_Frame2;
  document.getElementById('t3f2').innerHTML = dynamicContent.Prospecting_Sheet1[0].Resort_Frame2;
  document.getElementById('from1').innerHTML = dynamicContent.Prospecting_Sheet1[0].From_Frame2;
  document.getElementById('price1').innerHTML = dynamicContent.Prospecting_Sheet1[0].Price_Frame2;

  document.getElementById('t1sf3').innerHTML = dynamicContent.Prospecting_Sheet1[0].Search_Frame3;
  document.getElementById('t1df3').innerHTML = dynamicContent.Prospecting_Sheet1[0].Destination_Frame3;
  document.getElementById('t2f3').innerHTML = dynamicContent.Prospecting_Sheet1[0].Hotel_Frame3;
  document.getElementById('t3f3').innerHTML = dynamicContent.Prospecting_Sheet1[0].Resort_Frame3;
  document.getElementById('from2').innerHTML = dynamicContent.Prospecting_Sheet1[0].From_Frame3;
  document.getElementById('price2').innerHTML = dynamicContent.Prospecting_Sheet1[0].Price_Frame3;

  document.getElementById('CTA').innerHTML = dynamicContent.Prospecting_Sheet1[0].CTA;

  appendTracking();

  ExitURL = dynamicContent.Prospecting_Sheet1[0].Exit.Url;
  NoCTA = dynamicContent.Prospecting_Sheet1[0].CTA;

  if (NoCTA == "") {
    document.getElementById('CTA').style.boxShadow = "0px 0px 0px";
    document.getElementById('CTA').style.backgroundColor = 'rgba(255, 255, 255, 0.01)';
  }
}

function exitClickHandler() {
  Enabler.exitOverride("exit_url", ExitURL);
}

function pageLoadedHandler() {
  document.getElementById('exit_url').addEventListener('click', exitClickHandler, false);
}
