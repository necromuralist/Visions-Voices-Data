(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof (root._bokeh_onload_callbacks) === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        }
        finally {
          delete root._bokeh_onload_callbacks
        }
        console.info("Bokeh: all callbacks have finished");
      }
    
      function load_libs(js_urls, callback) {
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            root._bokeh_is_loading--;
            if (root._bokeh_is_loading === 0) {
              console.log("Bokeh: all BokehJS libraries loaded");
              run_callbacks()
            }
          };
          s.onerror = function() {
            console.warn("failed to load library " + url);
          };
          console.log("Bokeh: injecting script tag for BokehJS library: ", url);
          document.getElementsByTagName("head")[0].appendChild(s);
        }
      };var element = document.getElementById("dc18ca51-6ee7-4d09-8658-d696c50a9e60");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'dc18ca51-6ee7-4d09-8658-d696c50a9e60' but no matching script tag was found. ")
        return false;
      }
    
      var js_urls = ["https://cdn.pydata.org/bokeh/release/bokeh-1.0.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.0.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-tables-1.0.4.min.js", "https://cdn.pydata.org/bokeh/release/bokeh-gl-1.0.4.min.js"];
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"711bb3ab-2608-4cfb-af5f-a85125c90800":{"roots":{"references":[{"attributes":{},"id":"1403","type":"LinearScale"},{"attributes":{},"id":"1437","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"1490","type":"ColumnDataSource"},"glyph":{"id":"1509","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1510","type":"Line"},"selection_glyph":null,"view":{"id":"1512","type":"CDSView"}},"id":"1511","type":"GlyphRenderer"},{"attributes":{"label":{"value":"Southern Hemisphere Rolling 5 Year Mean"},"renderers":[{"id":"1511","type":"GlyphRenderer"}]},"id":"1526","type":"LegendItem"},{"attributes":{},"id":"1401","type":"LinearScale"},{"attributes":{"line_alpha":0.8,"line_color":"#377eb8","line_width":4,"x":{"field":"year"},"y":{"field":"smoothed"}},"id":"1474","type":"Line"},{"attributes":{"click_policy":"hide","items":[{"id":"1441","type":"LegendItem"},{"id":"1456","type":"LegendItem"},{"id":"1472","type":"LegendItem"},{"id":"1489","type":"LegendItem"},{"id":"1507","type":"LegendItem"},{"id":"1526","type":"LegendItem"}],"location":"top_left","plot":{"id":"1396","subtype":"Figure","type":"Plot"}},"id":"1440","type":"Legend"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":4,"x":{"field":"year"},"y":{"field":"smoothed"}},"id":"1475","type":"Line"},{"attributes":{"callback":null,"tooltips":[["Year","@year"],["Difference From Normal","@anomaly"]]},"id":"1390","type":"HoverTool"},{"attributes":{"label":{"value":"Global"},"renderers":[{"id":"1431","type":"GlyphRenderer"}]},"id":"1441","type":"LegendItem"},{"attributes":{"data_source":{"id":"1457","type":"ColumnDataSource"},"glyph":{"id":"1474","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1475","type":"Line"},"selection_glyph":null,"view":{"id":"1477","type":"CDSView"}},"id":"1476","type":"GlyphRenderer"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"1418","type":"BoxAnnotation"},{"attributes":{},"id":"1523","type":"Selection"},{"attributes":{"callback":null},"id":"1399","type":"DataRange1d"},{"attributes":{"source":{"id":"1457","type":"ColumnDataSource"}},"id":"1477","type":"CDSView"},{"attributes":{"line_alpha":0.8,"line_color":"#e41a1c","line_width":4,"x":{"field":"year"},"y":{"field":"smoothed"}},"id":"1443","type":"Line"},{"attributes":{"plot":null,"text":"Yearly Temperature Difference from Mean 1931-1980 Temperature by Hemisphere","text_font_size":{"value":"14pt"}},"id":"1424","type":"Title"},{"attributes":{"axis_label":"Year","formatter":{"id":"1435","type":"BasicTickFormatter"},"plot":{"id":"1396","subtype":"Figure","type":"Plot"},"ticker":{"id":"1406","type":"BasicTicker"}},"id":"1405","type":"LinearAxis"},{"attributes":{},"id":"1486","type":"Selection"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":4,"x":{"field":"year"},"y":{"field":"smoothed"}},"id":"1444","type":"Line"},{"attributes":{"callback":null,"end":2018,"start":1880},"id":"1397","type":"Range1d"},{"attributes":{},"id":"1453","type":"Selection"},{"attributes":{},"id":"1487","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"1427","type":"ColumnDataSource"},"glyph":{"id":"1443","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1444","type":"Line"},"selection_glyph":null,"view":{"id":"1446","type":"CDSView"}},"id":"1445","type":"GlyphRenderer"},{"attributes":{"label":{"value":"Northern Hemisphere Rolling 5 Year Mean"},"renderers":[{"id":"1476","type":"GlyphRenderer"}]},"id":"1489","type":"LegendItem"},{"attributes":{"source":{"id":"1427","type":"ColumnDataSource"}},"id":"1446","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":4,"x":{"field":"year"},"y":{"field":"smoothed"}},"id":"1510","type":"Line"},{"attributes":{},"id":"1454","type":"UnionRenderers"},{"attributes":{"line_cap":"round","line_color":{"value":"darkgray"},"line_dash":[6],"line_width":{"value":4},"location":0,"plot":null},"id":"1426","type":"Span"},{"attributes":{"label":{"value":"Global Rolling 5 Year Mean"},"renderers":[{"id":"1445","type":"GlyphRenderer"}]},"id":"1456","type":"LegendItem"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#4daf4a"},"line_alpha":{"value":0.2},"line_color":{"value":"#4daf4a"},"line_width":{"value":4},"x":{"field":"year"},"y":{"field":"anomaly"}},"id":"1492","type":"Circle"},{"attributes":{},"id":"1411","type":"BasicTicker"},{"attributes":{},"id":"1524","type":"UnionRenderers"},{"attributes":{"data_source":{"id":"1427","type":"ColumnDataSource"},"glyph":{"id":"1429","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1430","type":"Circle"},"selection_glyph":null,"view":{"id":"1432","type":"CDSView"}},"id":"1431","type":"GlyphRenderer"},{"attributes":{"source":{"id":"1490","type":"ColumnDataSource"}},"id":"1512","type":"CDSView"},{"attributes":{"source":{"id":"1427","type":"ColumnDataSource"}},"id":"1432","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":4},"x":{"field":"year"},"y":{"field":"anomaly"}},"id":"1493","type":"Circle"},{"attributes":{"below":[{"id":"1405","type":"LinearAxis"}],"left":[{"id":"1410","type":"LinearAxis"}],"plot_height":800,"plot_width":1000,"renderers":[{"id":"1405","type":"LinearAxis"},{"id":"1409","type":"Grid"},{"id":"1410","type":"LinearAxis"},{"id":"1414","type":"Grid"},{"id":"1418","type":"BoxAnnotation"},{"id":"1426","type":"Span"},{"id":"1440","type":"Legend"},{"id":"1431","type":"GlyphRenderer"},{"id":"1445","type":"GlyphRenderer"},{"id":"1461","type":"GlyphRenderer"},{"id":"1476","type":"GlyphRenderer"},{"id":"1494","type":"GlyphRenderer"},{"id":"1511","type":"GlyphRenderer"}],"title":{"id":"1424","type":"Title"},"toolbar":{"id":"1415","type":"Toolbar"},"x_range":{"id":"1397","type":"Range1d"},"x_scale":{"id":"1401","type":"LinearScale"},"y_range":{"id":"1399","type":"DataRange1d"},"y_scale":{"id":"1403","type":"LinearScale"}},"id":"1396","subtype":"Figure","type":"Plot"},{"attributes":{"data_source":{"id":"1490","type":"ColumnDataSource"},"glyph":{"id":"1492","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1493","type":"Circle"},"selection_glyph":null,"view":{"id":"1495","type":"CDSView"}},"id":"1494","type":"GlyphRenderer"},{"attributes":{"callback":null,"data":{"anomaly":{"__ndarray__":"CtejcD0Kx7+amZmZmZm5vylcj8L1KLy/UrgehetRyL+PwvUoXI/Sv9ejcD0K19O/exSuR+F61L9mZmZmZmbWvwrXo3A9Cse/KVyPwvUovL+uR+F6FK7Xv3E9CtejcM2/SOF6FK5H0b97FK5H4XrUv9ejcD0K19O/cT0K16Nwzb8pXI/C9Si8v7gehetRuL6/7FG4HoXr0b9SuB6F61HIvwrXo3A9Cre/exSuR+F6xL8zMzMzMzPTv/YoXI/C9di/XI/C9Shc37+PwvUoXI/Sv3E9CtejcM2/mpmZmZmZ2b+F61G4HoXbvxSuR+F6FN6/hetRuB6F27+F61G4HoXbvwrXo3A9Cte/ZmZmZmZm1r97FK5H4XrEv7gehetRuL6/H4XrUbge1b8pXI/C9Sjcv+xRuB6F69G/SOF6FK5H0b8AAAAAAADQv8P1KFyPwsW/SOF6FK5H0b+4HoXrUbjOvwAAAAAAANC/mpmZmZmZyb97FK5H4Xq0v5qZmZmZmcm/UrgehetRyL/D9Shcj8LVv+xRuB6F68G/mpmZmZmZub97FK5H4XrEvzMzMzMzM9O/7FG4HoXrwb+amZmZmZnJv3sUrkfhesS/exSuR+F6pL+4HoXrUbiev7gehetRuJ6/KVyPwvUovD8K16NwPQrHP5qZmZmZmak/7FG4HoXrsT/hehSuR+HKPwrXo3A9Crc/7FG4HoXrsb97FK5H4Xqkv5qZmZmZmbm/mpmZmZmZub8K16NwPQrHv7gehetRuK6/exSuR+F6hD/sUbgeheuxPzMzMzMzM8O/7FG4HoXrwb+amZmZmZnJv3sUrkfheqQ/7FG4HoXrsT+4HoXrUbieP3sUrkfhepS/mpmZmZmZqT97FK5H4XqkP+xRuB6F67E/mpmZmZmZyb+amZmZmZm5v5qZmZmZmam/exSuR+F6lL97FK5H4Xq0v+xRuB6F67E/uB6F61G4nj8K16NwPQq3v3sUrkfheoQ/exSuR+F6xD97FK5H4Xq0v3sUrkfhepS/KVyPwvUovL/D9Shcj8LFP+xRuB6F67E/exSuR+F6xD9I4XoUrkfRPx+F61G4HtU/7FG4HoXrwT/Xo3A9CtfTP3sUrkfhesQ/uB6F61G4vj8K16NwPQrHP8P1KFyPwtU/PQrXo3A92j+PwvUoXI/SPylcj8L1KNw/PQrXo3A92j8pXI/C9SjMP7gehetRuM4/16NwPQrX0z/NzMzMzMzcP8P1KFyPwtU/FK5H4XoU3j/Xo3A9CtfjP5qZmZmZmdk/mpmZmZmZ2T/2KFyPwvXgP9ejcD0K1+M/hetRuB6F4z/2KFyPwvXgP3E9CtejcOU/hetRuB6F4z97FK5H4XrkP1K4HoXrUeA/KVyPwvUo5D9mZmZmZmbmP4/C9Shcj+I/hetRuB6F4z97FK5H4XrkP1yPwvUoXOc/hetRuB6F6z9cj8L1KFzvP83MzMzMzOw/PQrXo3A96j8=","dtype":"float64","shape":[139]},"smoothed":{"__ndarray__":"CtejcD0Kx7/sUbgehevBv6RwPQrXo8C/kML1KFyPwr8Tg8DKoUXGv5uZmZmZmcm/CqwcWmQ7z7/kpZvEILDSv5DC9Shcj9K/qcZLN4lB0L+gGi/dJAbRv1g5tMh2vs+/GgRWDi2yzb+lcD0K16PQvzQzMzMzM9O/ncQgsHJo0b9bObTIdr7Pv4OVQ4ts58u/43oUrkfhyr8DK4cW2c7Hv9VNYhBYOcS/HS/dJAaBxb/tJjEIrBzKvyWwcmiR7cy/6vup8dJN0r95vp8aL93Uv8X1KFyPwtW/DNejcD0K179bZDvfT43Xv7Sd76fGS9e/SwwCK4cW2b/bzvdT46Xbv4tBYOXQItu/6yYxCKwc2r/Bnxov3STWv5YYBFYOLdK/TjeJQWDl0L/uUbgehevRv6MaL90kBtG/P99PjZdu0r+Darx0kxjUv0M1XrpJDNK/YDm0yHa+z7/AHoXrUbjOv3CR7Xw/Nc6/KLByaJHtzL9CtMh2vp/Kv6pFtvP91Mi/YmQ730+Nx79KYOXQItvJv1u4HoXrUci/rEW28/3UyL8NK4cW2c7Hv0W0yHa+n8q/JS/dJAaBxb8U16NwPQrHvwR/arx0k8i/JC/dJAaBxb/ddr6fGi+9v25kO99Pjbe/Ch+F61G4nr+y+X5qvHSjP1DpJjEIrKw/xvl+arx0sz9DObTIdr6/P6MehetRuL4/1lG4HoXrsT8OtMh2vp+qP+XeT42XbpI/5kkMAiuHpr9eDAIrhxa5vw5/arx0k7i/frx0kxgEtr9gtMh2vp+qv4A5tMh2vq+/As/3U+Olq7/foUW28/20v/D5fmq8dLO/8Pl+arx0s7+kFK5H4Xqkv02q8dJNYpC/c8QgsHJooT9zxCCwcmihP3PEILByaKE/nX9qvHSTiL/L6SYxCKycvyN/arx0k6i/4h6F61G4rr8f16NwPQq3v2XfT42XbqK/IBWuR+F6hL+O30+Nl26Sv55/arx0k4i/Et9PjZduoj+wfWq8dJN4P0ar8dJNYnC/oKrx0k1igL+pfmq8dJOYP7p9arx0k3g/ss73U+Olqz9m6SYxCKy8P5GZmZmZmck/mUW28/3UyD9W5dAi2/nOP1bl0CLb+c4/gEFg5dAiyz+one+nxkvHP8Yi2/l+asw/VeXQItv5zj/u/dR46SbRP21oke18P9U/+dR46SYx2D8JLbKd76fWP3YUrkfhetQ/Htv5fmq81D9yvp8aL93UPyaHFtnO99M/WbpJDAIr1z/QeOkmMQjcP8N2vp8aL90/HgaBlUOL3D9a5dAi2/neP6ObxCCwcuA/+anx0k1i4D+a76fGSzfhP4hs5/up8eI/2Pl+arx04z8s3SQGgZXjP4ls5/up8eI/Ld0kBoGV4z8rsp3vp8bjPy7dJAaBleM/LwisHFpk4z/STWIQWDnkP3a+nxov3eQ/FdnO91Pj5T+jm8QgsHLoP+X7qfHSTeo/2vl+arx06z8=","dtype":"float64","shape":[139]},"year":{"__ndarray__":"WAcAAFkHAABaBwAAWwcAAFwHAABdBwAAXgcAAF8HAABgBwAAYQcAAGIHAABjBwAAZAcAAGUHAABmBwAAZwcAAGgHAABpBwAAagcAAGsHAABsBwAAbQcAAG4HAABvBwAAcAcAAHEHAAByBwAAcwcAAHQHAAB1BwAAdgcAAHcHAAB4BwAAeQcAAHoHAAB7BwAAfAcAAH0HAAB+BwAAfwcAAIAHAACBBwAAggcAAIMHAACEBwAAhQcAAIYHAACHBwAAiAcAAIkHAACKBwAAiwcAAIwHAACNBwAAjgcAAI8HAACQBwAAkQcAAJIHAACTBwAAlAcAAJUHAACWBwAAlwcAAJgHAACZBwAAmgcAAJsHAACcBwAAnQcAAJ4HAACfBwAAoAcAAKEHAACiBwAAowcAAKQHAAClBwAApgcAAKcHAACoBwAAqQcAAKoHAACrBwAArAcAAK0HAACuBwAArwcAALAHAACxBwAAsgcAALMHAAC0BwAAtQcAALYHAAC3BwAAuAcAALkHAAC6BwAAuwcAALwHAAC9BwAAvgcAAL8HAADABwAAwQcAAMIHAADDBwAAxAcAAMUHAADGBwAAxwcAAMgHAADJBwAAygcAAMsHAADMBwAAzQcAAM4HAADPBwAA0AcAANEHAADSBwAA0wcAANQHAADVBwAA1gcAANcHAADYBwAA2QcAANoHAADbBwAA3AcAAN0HAADeBwAA3wcAAOAHAADhBwAA4gcAAA==","dtype":"int32","shape":[139]}},"selected":{"id":"1453","type":"Selection"},"selection_policy":{"id":"1454","type":"UnionRenderers"}},"id":"1427","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#377eb8"},"line_alpha":{"value":0.2},"line_color":{"value":"#377eb8"},"line_width":{"value":4},"x":{"field":"year"},"y":{"field":"anomaly"}},"id":"1459","type":"Circle"},{"attributes":{"plot":{"id":"1396","subtype":"Figure","type":"Plot"},"ticker":{"id":"1406","type":"BasicTicker"}},"id":"1409","type":"Grid"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":4},"x":{"field":"year"},"y":{"field":"anomaly"}},"id":"1430","type":"Circle"},{"attributes":{"overlay":{"id":"1418","type":"BoxAnnotation"}},"id":"1393","type":"BoxZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1390","type":"HoverTool"},{"id":"1391","type":"PanTool"},{"id":"1392","type":"WheelZoomTool"},{"id":"1393","type":"BoxZoomTool"},{"id":"1394","type":"ResetTool"},{"id":"1395","type":"SaveTool"}]},"id":"1415","type":"Toolbar"},{"attributes":{"source":{"id":"1490","type":"ColumnDataSource"}},"id":"1495","type":"CDSView"},{"attributes":{"axis_label":"Difference (Celsius)","formatter":{"id":"1437","type":"BasicTickFormatter"},"plot":{"id":"1396","subtype":"Figure","type":"Plot"},"ticker":{"id":"1411","type":"BasicTicker"}},"id":"1410","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":4},"x":{"field":"year"},"y":{"field":"anomaly"}},"id":"1460","type":"Circle"},{"attributes":{},"id":"1391","type":"PanTool"},{"attributes":{},"id":"1392","type":"WheelZoomTool"},{"attributes":{"data_source":{"id":"1457","type":"ColumnDataSource"},"glyph":{"id":"1459","type":"Circle"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1460","type":"Circle"},"selection_glyph":null,"view":{"id":"1462","type":"CDSView"}},"id":"1461","type":"GlyphRenderer"},{"attributes":{},"id":"1406","type":"BasicTicker"},{"attributes":{},"id":"1435","type":"BasicTickFormatter"},{"attributes":{"label":{"value":"Southern Hemisphere"},"renderers":[{"id":"1494","type":"GlyphRenderer"}]},"id":"1507","type":"LegendItem"},{"attributes":{"source":{"id":"1457","type":"ColumnDataSource"}},"id":"1462","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#e41a1c"},"line_alpha":{"value":0.2},"line_color":{"value":"#e41a1c"},"line_width":{"value":4},"x":{"field":"year"},"y":{"field":"anomaly"}},"id":"1429","type":"Circle"},{"attributes":{"callback":null,"data":{"anomaly":{"__ndarray__":"16NwPQrX079SuB6F61HIv+F6FK5H4cq/16NwPQrX07+F61G4HoXbv5qZmZmZmdm/PQrXo3A92r89CtejcD3av3E9CtejcM2/w/UoXI/Cxb/hehSuR+Hav6RwPQrXo9C/rkfhehSu17/NzMzMzMzcv1K4HoXrUdi/j8L1KFyP0r+amZmZmZnJv8P1KFyPwsW/j8L1KFyP0r/hehSuR+HKvwrXo3A9Cre/mpmZmZmZub9mZmZmZmbWv/YoXI/C9di/AAAAAAAA4L/Xo3A9CtfTv3E9CtejcM2/FK5H4XoU3r9xPQrXo3DdvxSuR+F6FN6/KVyPwvUo3L+amZmZmZnZv83MzMzMzNy/hetRuB6F279SuB6F61HIvylcj8L1KLy/CtejcD0K179I4XoUrkfhv65H4XoUrte/H4XrUbge1b8AAAAAAADQv+xRuB6F67G/uB6F61G4zr8K16NwPQrHv+xRuB6F68G/mpmZmZmZub+amZmZmZmpP5qZmZmZmbm/7FG4HoXrsb8zMzMzMzPTv3sUrkfhepQ/mpmZmZmZqT+amZmZmZmpv6RwPQrXo9C/exSuR+F6hL8K16NwPQq3v3sUrkfheqS/uB6F61G4vj+4HoXrUbi+P3sUrkfherQ/w/UoXI/CxT+4HoXrUbjOPylcj8L1KLw/MzMzMzMzwz9I4XoUrkfRPwrXo3A9Crc/exSuR+F6pD+4HoXrUbiuP3sUrkfheoS/uB6F61G4nr/D9Shcj8LFv5qZmZmZmak/uB6F61G4rj9xPQrXo3DNP3sUrkfheqS/mpmZmZmZub+kcD0K16PQv3sUrkfheqQ/w/UoXI/CxT8pXI/C9Si8P3sUrkfherQ/exSuR+F6tD8zMzMzMzPDP3sUrkfhesQ/UrgehetRyL+kcD0K16PAvwAAAAAAAAAAuB6F61G4nj+4HoXrUbiuv3sUrkfheoS/uB6F61G4nr97FK5H4XrEvwrXo3A9Cse/mpmZmZmZuT+amZmZmZnJv7gehetRuK6/4XoUrkfhyr8pXI/C9Si8P3sUrkfhepQ/exSuR+F6tD97FK5H4XrEP/YoXI/C9dg/mpmZmZmZqT+kcD0K16PQP3sUrkfheqQ/exSuR+F6hL+kcD0K16PAP0jhehSuR9E/UrgehetR2D+PwvUoXI/SP1K4HoXrUeA/PQrXo3A92j+4HoXrUbi+P1K4HoXrUcg/CtejcD0K1z+PwvUoXI/iP+xRuB6F69E/9ihcj8L14D9cj8L1KFznPwAAAAAAAOA/AAAAAAAA4D8pXI/C9SjkP7gehetRuOY/XI/C9Shc5z9xPQrXo3DlP4/C9Shcj+o/9ihcj8L16D/sUbgehevpP3sUrkfheuQ/FK5H4XoU5j+F61G4HoXrP2ZmZmZmZuY/UrgehetR6D+uR+F6FK7nP3sUrkfheuw/7FG4HoXr8T8pXI/C9Sj0P8P1KFyPwvE/rkfhehSu7z8=","dtype":"float64","shape":[139]},"smoothed":{"__ndarray__":"16NwPQrX078AAAAAAADQv0t+seQXS86/UrgehetR0L+PwvUoXI/Sv4PAyqFFttO/ukkMAiuH1r9KDAIrhxbZv6rx0k1iENi/Itv5fmq81L/LoUW28/3Uv+BPjZduEtO/kcL1KFyP0r/ISzeJQWDVv6vx0k1iENi/aGZmZmZm1r9wEoPAyqHVv+BPjZduEtO/oRov3SQG0b8aBFYOLbLNv/t+arx0k8i/bbx0kxgExr89tMh2vp/Kv812vp8aL82/6vup8dJN0r8hhetRuB7Vv2QQWDm0yNa/U7gehetR2L+e76fGSzfZv6NFtvP91Ni/5tAi2/l+2r966SYxCKzcv9Mi2/l+aty/2HjpJjEI3L+pm8QgsHLYv9ZNYhBYOdS/hsDKoUW20796vp8aL93Uv4JqvHSTGNS/GtnO91Pj1b+yR+F6FK7Xvy6HFtnO99O/V+Olm8Qg0L82CKwcWmTLv8BJDAIrh8a/6aWbxCCwwr8TrBxaZDu/v7Xx0k1iELi/Rt9PjZdusr9DtMh2vp+6v4UUrkfherS/hRSuR+F6tL/1Ubgeheuxv+PO91Pjpbu/rpmZmZmZqb9G30+Nl26yvxXXo3A9Cre/jukmMQisrL9QFK5H4XqUP8b5fmq8dKM/ANejcD0Ktz/epZvEILDCPzbfT42XbsI/LjMzMzMzwz+m8dJNYhDIP2a8dJMYBMY/RzeJQWDlwD/+qxxaZDu/PwDXo3A9Crc/jR6F61G4nj/mSQwCK4eWv6YUrkfhepS/phSuR+F6lL9O6SYxCKycPw60yHa+n5o/ZhSuR+F6pD/mSQwCK4eWv2W0yHa+n5q/8fl+arx0o79SqvHSTWKAv07pJjEIrJw/735qvHSTuD9dke18PzW+Pw0EVg4tsr0/YukmMQisrD8b6SYxCKyMP3Or8dJNYmC/aLTIdr6fmr/3Ubgeheuxv7PEILByaKG/1ukmMQisjL9yZDvfT42nv8ZJDAIrh7a/kukmMQisrL+28dJNYhC4v6aZmZmZmbm/NVyPwvUovL9StMh2vp+qv6jEILByaLG/Wn9qvHSTiL/kqfHSTWKgP9X5fmq8dMM/5lG4HoXrwT+k8dJNYhDIPwXXo3A9Csc/3qWbxCCwwj+e8dJNYhC4Pz6LbOf7qcE/Hdv5fmq8xD+DQWDl0CLLP9BNYhBYOdQ//iqHFtnO1z8T2c73U+PVP9j5fmq8dNM/IzEIrBxa1D9vaJHtfD/VPyzdJAaBldM/nkW28/3U2D9VObTIdr7fP/ZT46WbxOA/psZLN4lB4D/j0CLb+X7iP9bO91PjpeM/1s73U+Ol4z8g2/l+arzkPwoCK4cW2eY/ACuHFtnO5z+lm8QgsHLoP6ocWmQ73+c//v//////5z/91HjpJjHoP61H4XoUruc/Wo/C9Shc5z/+///////nP0bhehSuR+k/iGzn+6nx6j+2SQwCK4fuP/qp8dJNYvA/x3a+nxov8T8=","dtype":"float64","shape":[139]},"year":{"__ndarray__":"WAcAAFkHAABaBwAAWwcAAFwHAABdBwAAXgcAAF8HAABgBwAAYQcAAGIHAABjBwAAZAcAAGUHAABmBwAAZwcAAGgHAABpBwAAagcAAGsHAABsBwAAbQcAAG4HAABvBwAAcAcAAHEHAAByBwAAcwcAAHQHAAB1BwAAdgcAAHcHAAB4BwAAeQcAAHoHAAB7BwAAfAcAAH0HAAB+BwAAfwcAAIAHAACBBwAAggcAAIMHAACEBwAAhQcAAIYHAACHBwAAiAcAAIkHAACKBwAAiwcAAIwHAACNBwAAjgcAAI8HAACQBwAAkQcAAJIHAACTBwAAlAcAAJUHAACWBwAAlwcAAJgHAACZBwAAmgcAAJsHAACcBwAAnQcAAJ4HAACfBwAAoAcAAKEHAACiBwAAowcAAKQHAAClBwAApgcAAKcHAACoBwAAqQcAAKoHAACrBwAArAcAAK0HAACuBwAArwcAALAHAACxBwAAsgcAALMHAAC0BwAAtQcAALYHAAC3BwAAuAcAALkHAAC6BwAAuwcAALwHAAC9BwAAvgcAAL8HAADABwAAwQcAAMIHAADDBwAAxAcAAMUHAADGBwAAxwcAAMgHAADJBwAAygcAAMsHAADMBwAAzQcAAM4HAADPBwAA0AcAANEHAADSBwAA0wcAANQHAADVBwAA1gcAANcHAADYBwAA2QcAANoHAADbBwAA3AcAAN0HAADeBwAA3wcAAOAHAADhBwAA4gcAAA==","dtype":"int32","shape":[139]}},"selected":{"id":"1486","type":"Selection"},"selection_policy":{"id":"1487","type":"UnionRenderers"}},"id":"1457","type":"ColumnDataSource"},{"attributes":{"line_alpha":0.8,"line_color":"#4daf4a","line_width":4,"x":{"field":"year"},"y":{"field":"smoothed"}},"id":"1509","type":"Line"},{"attributes":{"dimension":1,"plot":{"id":"1396","subtype":"Figure","type":"Plot"},"ticker":{"id":"1411","type":"BasicTicker"}},"id":"1414","type":"Grid"},{"attributes":{},"id":"1395","type":"SaveTool"},{"attributes":{"callback":null,"data":{"anomaly":{"__ndarray__":"uB6F61G4rr97FK5H4XqEv3sUrkfheoS/uB6F61G4rr8zMzMzMzPDv7gehetRuM6/uB6F61G4zr8zMzMzMzPTv+xRuB6F68G/uB6F61G4rr8fhetRuB7Vv+F6FK5H4cq/exSuR+F6xL9SuB6F61HIv7gehetRuM6/exSuR+F6xL+4HoXrUbiev+xRuB6F67G/7FG4HoXr0b97FK5H4XrEvwrXo3A9Cre/4XoUrkfhyr8AAAAAAADQv/YoXI/C9di/XI/C9Shc37+kcD0K16PQv3E9CtejcM2/exSuR+F61L/hehSuR+Hav7gehetRuN6/hetRuB6F278UrkfhehTevwAAAAAAANC/SOF6FK5H0b+4HoXrUbi+v6RwPQrXo8C/16NwPQrX079mZmZmZmbWv5qZmZmZmcm/mpmZmZmZyb8AAAAAAADQv+xRuB6F69G/MzMzMzMz078zMzMzMzPTv2ZmZmZmZta/MzMzMzMz07+amZmZmZnJv4/C9Shcj9K/MzMzMzMz079SuB6F61HYv4/C9Shcj9K/cT0K16Nwzb9I4XoUrkfRvx+F61G4HtW/SOF6FK5H0b97FK5H4XrUv+xRuB6F69G/mpmZmZmZyb/hehSuR+HKvzMzMzMzM8O/7FG4HoXrsT8zMzMzMzPDPwAAAAAAAAAAexSuR+F6lL8zMzMzMzPDPwrXo3A9Crc/w/UoXI/Cxb/sUbgehevBv5qZmZmZmcm/CtejcD0Kx7+amZmZmZnJv8P1KFyPwsW/uB6F61G4nr97FK5H4Xq0vwAAAAAAANC/mpmZmZmZyb97FK5H4XrEv3sUrkfheqQ/uB6F61G4nr+4HoXrUbiuv7gehetRuL6/exSuR+F6lD97FK5H4Xq0v3sUrkfhepS/mpmZmZmZyb97FK5H4Xq0vwrXo3A9Cre/exSuR+F6tL8K16NwPQq3vzMzMzMzM8M/CtejcD0Ktz+4HoXrUbievylcj8L1KMw/KVyPwvUozD+4HoXrUbieP3sUrkfhepQ/AAAAAAAAAABxPQrXo3DNPylcj8L1KLw/uB6F61G4zj9SuB6F61HYP0jhehSuR9E/KVyPwvUozD9SuB6F61HYP4/C9Shcj9I/AAAAAAAA0D+4HoXrUbjOPz0K16NwPdo/KVyPwvUo3D+PwvUoXI/SP65H4XoUrtc/PQrXo3A92j97FK5H4XrUP4/C9Shcj9I/pHA9Ctej0D/Xo3A9CtfTP/YoXI/C9dg/PQrXo3A92j+kcD0K16PgPzMzMzMzM9M/MzMzMzMz0z+F61G4HoXbP0jhehSuR+E/XI/C9Shc3z+amZmZmZnZP1K4HoXrUeA/zczMzMzM3D9xPQrXo3DdP/YoXI/C9dg/PQrXo3A94j/2KFyPwvXgP3E9CtejcN0/FK5H4XoU3j9I4XoUrkfhP+xRuB6F6+E/hetRuB6F4z+4HoXrUbjmP8P1KFyPwuU/H4XrUbge5T8=","dtype":"float64","shape":[139]},"smoothed":{"__ndarray__":"uB6F61G4rr/rUbgeheuhv00b6LSBTpu/61G4HoXrob8YBFYOLbKtv6rx0k1iELi/61G4HoXrwb/y0k1iEFjJvzAIrBxaZMu/SQwCK4cWyb8wCKwcWmTLvzi0yHa+n8q/CNejcD0Kx79PuB6F61HIvx2wcmiR7cy/9X5qvHSTyL8mhxbZzvfDvz+LbOf7qcG/JocW2c73w7/nUbgehevBv0/jpZvEIMC/Htv5fmq8xL/r0k1iEFjJvyJcj8L1KMy/5Pup8dJN0r93FK5H4XrUvx/b+X5qvNS/axKDwMqh1b9mvHSTGATWvxLZzvdT49W/pvHSTWIQ2L+FQWDl0CLbvzoK16NwPdq/TrgehetR2L+AwMqhRbbTv1I5tMh2vs+/0873U+Oly79jke18PzXOv8si2/l+asy/Clg5tMh2zr/1U+Olm8TQv/mp8dJNYtC/qnJoke18z7+dGi/dJAbRv4ls5/up8dK/Ld0kBoGV07+NwvUoXI/SvznfT42XbtK/Od9PjZdu0r81iUFg5dDSv+Glm8QgsNK/3U+Nl24S0781iUFg5dDSvzEzMzMzM9O/lW4Sg8DK0b+RGARWDi3SvzWJQWDl0NK/6VG4HoXr0b/5qfHSTWLQvxIEVg4tss2/e8DKoUW2w7+LxCCwcmixvzbpJjEIrJy/ABWuR+F6hD/8UbgeheuxP5xs5/up8bI/ABWuR+F6hD/63k+Nl26Sv7jO91Pjpau/qB6F61G4vr9aEFg5tMjGv1oQWDm0yMa/I4cW2c73w79DN4lBYOXAv9ulm8QgsMK/26WbxCCwwr8z30+Nl27Cv5twPQrXo8C/qB6F61G4vr+6oUW28/20vzo3iUFg5bC/ch6F61G4nr+1zvdT46Wrvxa0yHa+n6q/ahSuR+F6tL8q30+Nl26yv5rx0k1iELi/mfHSTWIQuL/IzvdT46W7v7j5fmq8dKO/46jx0k1icL+IqvHSTWKAP67EILByaLE/rXA9CtejwD+bQWDl0CK7P21kO99Pjbc/XQwCK4cWuT+tmZmZmZm5Pz6HFtnO97M/yx6F61G4vj8Df2q8dJPIP7pyaJHtfM8/EqwcWmQ7zz/kT42XbhLTP4jAyqFFttM/RTVeukkM0j9Ji2zn+6nRP4RqvHSTGNQ/fb6fGi/d1D99vp8aL93UP21mZmZmZtY/AX9qvHST2D8OgZVDi2zXPyIv3SQGgdU/JoXrUbge1T8uMQisHFrUP4dqvHSTGNQ/emiR7Xw/1T8G1XjpJjHYP1ZiEFg5tNg/An9qvHST2D9SDAIrhxbZP5WXbhKDwNo/mO18PzVe2j/gzvdT46XbP8N0kxgEVt4/azvfT42X3j/LILByaJHdP4M/NV66Sdw/Flg5tMh23j/AHoXrUbjePxMCK4cW2d4/ZuXQItv53j+pm8QgsHLgP/+p8dJNYuA/TjeJQWDl4D/o0CLb+X7iP9qjcD0K1+M/0vdT46Wb5D8=","dtype":"float64","shape":[139]},"year":{"__ndarray__":"WAcAAFkHAABaBwAAWwcAAFwHAABdBwAAXgcAAF8HAABgBwAAYQcAAGIHAABjBwAAZAcAAGUHAABmBwAAZwcAAGgHAABpBwAAagcAAGsHAABsBwAAbQcAAG4HAABvBwAAcAcAAHEHAAByBwAAcwcAAHQHAAB1BwAAdgcAAHcHAAB4BwAAeQcAAHoHAAB7BwAAfAcAAH0HAAB+BwAAfwcAAIAHAACBBwAAggcAAIMHAACEBwAAhQcAAIYHAACHBwAAiAcAAIkHAACKBwAAiwcAAIwHAACNBwAAjgcAAI8HAACQBwAAkQcAAJIHAACTBwAAlAcAAJUHAACWBwAAlwcAAJgHAACZBwAAmgcAAJsHAACcBwAAnQcAAJ4HAACfBwAAoAcAAKEHAACiBwAAowcAAKQHAAClBwAApgcAAKcHAACoBwAAqQcAAKoHAACrBwAArAcAAK0HAACuBwAArwcAALAHAACxBwAAsgcAALMHAAC0BwAAtQcAALYHAAC3BwAAuAcAALkHAAC6BwAAuwcAALwHAAC9BwAAvgcAAL8HAADABwAAwQcAAMIHAADDBwAAxAcAAMUHAADGBwAAxwcAAMgHAADJBwAAygcAAMsHAADMBwAAzQcAAM4HAADPBwAA0AcAANEHAADSBwAA0wcAANQHAADVBwAA1gcAANcHAADYBwAA2QcAANoHAADbBwAA3AcAAN0HAADeBwAA3wcAAOAHAADhBwAA4gcAAA==","dtype":"int32","shape":[139]}},"selected":{"id":"1523","type":"Selection"},"selection_policy":{"id":"1524","type":"UnionRenderers"}},"id":"1490","type":"ColumnDataSource"},{"attributes":{},"id":"1394","type":"ResetTool"},{"attributes":{"label":{"value":"Northern Hemisphere"},"renderers":[{"id":"1461","type":"GlyphRenderer"}]},"id":"1472","type":"LegendItem"}],"root_ids":["1396"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"711bb3ab-2608-4cfb-af5f-a85125c90800","roots":{"1396":"dc18ca51-6ee7-4d09-8658-d696c50a9e60"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        embed_document(root);
                        clearInterval(timer);
                      }
                      attempts++;
                      if (attempts > 100) {
                        console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        clearInterval(timer);
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-1.0.4.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-1.0.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.0.4.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-widgets-1.0.4.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-tables-1.0.4.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-tables-1.0.4.min.css");
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();