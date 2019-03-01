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
      };var element = document.getElementById("c46002a4-86c3-497f-8734-0cba02939fed");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'c46002a4-86c3-497f-8734-0cba02939fed' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"31f5c6a3-1813-4754-971f-ee9fd536c0cc":{"roots":{"references":[{"attributes":{},"id":"3547","type":"Selection"},{"attributes":{"callback":null,"data":{"anomaly":{"__ndarray__":"CtejcD0Kx7+amZmZmZm5vylcj8L1KLy/UrgehetRyL+PwvUoXI/Sv9ejcD0K19O/exSuR+F61L9mZmZmZmbWvwrXo3A9Cse/KVyPwvUovL+uR+F6FK7Xv3E9CtejcM2/SOF6FK5H0b97FK5H4XrUv9ejcD0K19O/cT0K16Nwzb8pXI/C9Si8v7gehetRuL6/7FG4HoXr0b9SuB6F61HIvwrXo3A9Cre/exSuR+F6xL8zMzMzMzPTv/YoXI/C9di/XI/C9Shc37+PwvUoXI/Sv3E9CtejcM2/mpmZmZmZ2b+F61G4HoXbvxSuR+F6FN6/hetRuB6F27+F61G4HoXbvwrXo3A9Cte/ZmZmZmZm1r97FK5H4XrEv7gehetRuL6/H4XrUbge1b8pXI/C9Sjcv+xRuB6F69G/SOF6FK5H0b8AAAAAAADQv8P1KFyPwsW/SOF6FK5H0b+4HoXrUbjOvwAAAAAAANC/mpmZmZmZyb97FK5H4Xq0v5qZmZmZmcm/UrgehetRyL/D9Shcj8LVv+xRuB6F68G/mpmZmZmZub97FK5H4XrEvzMzMzMzM9O/7FG4HoXrwb+amZmZmZnJv3sUrkfhesS/exSuR+F6pL+4HoXrUbiev7gehetRuJ6/KVyPwvUovD8K16NwPQrHP5qZmZmZmak/7FG4HoXrsT/hehSuR+HKPwrXo3A9Crc/7FG4HoXrsb97FK5H4Xqkv5qZmZmZmbm/mpmZmZmZub8K16NwPQrHv7gehetRuK6/exSuR+F6hD/sUbgeheuxPzMzMzMzM8O/7FG4HoXrwb+amZmZmZnJv3sUrkfheqQ/7FG4HoXrsT+4HoXrUbieP3sUrkfhepS/mpmZmZmZqT97FK5H4XqkP+xRuB6F67E/mpmZmZmZyb+amZmZmZm5v5qZmZmZmam/exSuR+F6lL97FK5H4Xq0v+xRuB6F67E/uB6F61G4nj8K16NwPQq3v3sUrkfheoQ/exSuR+F6xD97FK5H4Xq0v3sUrkfhepS/KVyPwvUovL/D9Shcj8LFP+xRuB6F67E/exSuR+F6xD9I4XoUrkfRPx+F61G4HtU/7FG4HoXrwT/Xo3A9CtfTP3sUrkfhesQ/uB6F61G4vj8K16NwPQrHP8P1KFyPwtU/PQrXo3A92j+PwvUoXI/SPylcj8L1KNw/PQrXo3A92j8pXI/C9SjMP7gehetRuM4/16NwPQrX0z/NzMzMzMzcP8P1KFyPwtU/FK5H4XoU3j/Xo3A9CtfjP5qZmZmZmdk/mpmZmZmZ2T/2KFyPwvXgP9ejcD0K1+M/hetRuB6F4z/2KFyPwvXgP3E9CtejcOU/hetRuB6F4z97FK5H4XrkP1K4HoXrUeA/KVyPwvUo5D9mZmZmZmbmP4/C9Shcj+I/hetRuB6F4z97FK5H4XrkP1yPwvUoXOc/hetRuB6F6z9cj8L1KFzvP83MzMzMzOw/PQrXo3A96j8=","dtype":"float64","shape":[139]},"year":{"__ndarray__":"WAcAAFkHAABaBwAAWwcAAFwHAABdBwAAXgcAAF8HAABgBwAAYQcAAGIHAABjBwAAZAcAAGUHAABmBwAAZwcAAGgHAABpBwAAagcAAGsHAABsBwAAbQcAAG4HAABvBwAAcAcAAHEHAAByBwAAcwcAAHQHAAB1BwAAdgcAAHcHAAB4BwAAeQcAAHoHAAB7BwAAfAcAAH0HAAB+BwAAfwcAAIAHAACBBwAAggcAAIMHAACEBwAAhQcAAIYHAACHBwAAiAcAAIkHAACKBwAAiwcAAIwHAACNBwAAjgcAAI8HAACQBwAAkQcAAJIHAACTBwAAlAcAAJUHAACWBwAAlwcAAJgHAACZBwAAmgcAAJsHAACcBwAAnQcAAJ4HAACfBwAAoAcAAKEHAACiBwAAowcAAKQHAAClBwAApgcAAKcHAACoBwAAqQcAAKoHAACrBwAArAcAAK0HAACuBwAArwcAALAHAACxBwAAsgcAALMHAAC0BwAAtQcAALYHAAC3BwAAuAcAALkHAAC6BwAAuwcAALwHAAC9BwAAvgcAAL8HAADABwAAwQcAAMIHAADDBwAAxAcAAMUHAADGBwAAxwcAAMgHAADJBwAAygcAAMsHAADMBwAAzQcAAM4HAADPBwAA0AcAANEHAADSBwAA0wcAANQHAADVBwAA1gcAANcHAADYBwAA2QcAANoHAADbBwAA3AcAAN0HAADeBwAA3wcAAOAHAADhBwAA4gcAAA==","dtype":"int32","shape":[139]}},"selected":{"id":"3547","type":"Selection"},"selection_policy":{"id":"3546","type":"UnionRenderers"}},"id":"3518","type":"ColumnDataSource"},{"attributes":{},"id":"3578","type":"UnionRenderers"},{"attributes":{"label":{"value":"Northern Hemisphere"},"renderers":[{"id":"3537","type":"GlyphRenderer"}]},"id":"3548","type":"LegendItem"},{"attributes":{},"id":"3483","type":"WheelZoomTool"},{"attributes":{"callback":null,"data":{"anomaly":{"__ndarray__":"uB6F61G4rr97FK5H4XqEv3sUrkfheoS/uB6F61G4rr8zMzMzMzPDv7gehetRuM6/uB6F61G4zr8zMzMzMzPTv+xRuB6F68G/uB6F61G4rr8fhetRuB7Vv+F6FK5H4cq/exSuR+F6xL9SuB6F61HIv7gehetRuM6/exSuR+F6xL+4HoXrUbiev+xRuB6F67G/7FG4HoXr0b97FK5H4XrEvwrXo3A9Cre/4XoUrkfhyr8AAAAAAADQv/YoXI/C9di/XI/C9Shc37+kcD0K16PQv3E9CtejcM2/exSuR+F61L/hehSuR+Hav7gehetRuN6/hetRuB6F278UrkfhehTevwAAAAAAANC/SOF6FK5H0b+4HoXrUbi+v6RwPQrXo8C/16NwPQrX079mZmZmZmbWv5qZmZmZmcm/mpmZmZmZyb8AAAAAAADQv+xRuB6F69G/MzMzMzMz078zMzMzMzPTv2ZmZmZmZta/MzMzMzMz07+amZmZmZnJv4/C9Shcj9K/MzMzMzMz079SuB6F61HYv4/C9Shcj9K/cT0K16Nwzb9I4XoUrkfRvx+F61G4HtW/SOF6FK5H0b97FK5H4XrUv+xRuB6F69G/mpmZmZmZyb/hehSuR+HKvzMzMzMzM8O/7FG4HoXrsT8zMzMzMzPDPwAAAAAAAAAAexSuR+F6lL8zMzMzMzPDPwrXo3A9Crc/w/UoXI/Cxb/sUbgehevBv5qZmZmZmcm/CtejcD0Kx7+amZmZmZnJv8P1KFyPwsW/uB6F61G4nr97FK5H4Xq0vwAAAAAAANC/mpmZmZmZyb97FK5H4XrEv3sUrkfheqQ/uB6F61G4nr+4HoXrUbiuv7gehetRuL6/exSuR+F6lD97FK5H4Xq0v3sUrkfhepS/mpmZmZmZyb97FK5H4Xq0vwrXo3A9Cre/exSuR+F6tL8K16NwPQq3vzMzMzMzM8M/CtejcD0Ktz+4HoXrUbievylcj8L1KMw/KVyPwvUozD+4HoXrUbieP3sUrkfhepQ/AAAAAAAAAABxPQrXo3DNPylcj8L1KLw/uB6F61G4zj9SuB6F61HYP0jhehSuR9E/KVyPwvUozD9SuB6F61HYP4/C9Shcj9I/AAAAAAAA0D+4HoXrUbjOPz0K16NwPdo/KVyPwvUo3D+PwvUoXI/SP65H4XoUrtc/PQrXo3A92j97FK5H4XrUP4/C9Shcj9I/pHA9Ctej0D/Xo3A9CtfTP/YoXI/C9dg/PQrXo3A92j+kcD0K16PgPzMzMzMzM9M/MzMzMzMz0z+F61G4HoXbP0jhehSuR+E/XI/C9Shc3z+amZmZmZnZP1K4HoXrUeA/zczMzMzM3D9xPQrXo3DdP/YoXI/C9dg/PQrXo3A94j/2KFyPwvXgP3E9CtejcN0/FK5H4XoU3j9I4XoUrkfhP+xRuB6F6+E/hetRuB6F4z+4HoXrUbjmP8P1KFyPwuU/H4XrUbge5T8=","dtype":"float64","shape":[139]},"year":{"__ndarray__":"WAcAAFkHAABaBwAAWwcAAFwHAABdBwAAXgcAAF8HAABgBwAAYQcAAGIHAABjBwAAZAcAAGUHAABmBwAAZwcAAGgHAABpBwAAagcAAGsHAABsBwAAbQcAAG4HAABvBwAAcAcAAHEHAAByBwAAcwcAAHQHAAB1BwAAdgcAAHcHAAB4BwAAeQcAAHoHAAB7BwAAfAcAAH0HAAB+BwAAfwcAAIAHAACBBwAAggcAAIMHAACEBwAAhQcAAIYHAACHBwAAiAcAAIkHAACKBwAAiwcAAIwHAACNBwAAjgcAAI8HAACQBwAAkQcAAJIHAACTBwAAlAcAAJUHAACWBwAAlwcAAJgHAACZBwAAmgcAAJsHAACcBwAAnQcAAJ4HAACfBwAAoAcAAKEHAACiBwAAowcAAKQHAAClBwAApgcAAKcHAACoBwAAqQcAAKoHAACrBwAArAcAAK0HAACuBwAArwcAALAHAACxBwAAsgcAALMHAAC0BwAAtQcAALYHAAC3BwAAuAcAALkHAAC6BwAAuwcAALwHAAC9BwAAvgcAAL8HAADABwAAwQcAAMIHAADDBwAAxAcAAMUHAADGBwAAxwcAAMgHAADJBwAAygcAAMsHAADMBwAAzQcAAM4HAADPBwAA0AcAANEHAADSBwAA0wcAANQHAADVBwAA1gcAANcHAADYBwAA2QcAANoHAADbBwAA3AcAAN0HAADeBwAA3wcAAOAHAADhBwAA4gcAAA==","dtype":"int32","shape":[139]}},"selected":{"id":"3579","type":"Selection"},"selection_policy":{"id":"3578","type":"UnionRenderers"}},"id":"3549","type":"ColumnDataSource"},{"attributes":{"line_cap":"round","line_color":{"value":"darkgray"},"line_dash":[6],"line_width":{"value":4},"location":0,"plot":null},"id":"3366","type":"Span"},{"attributes":{"overlay":{"id":"3509","type":"BoxAnnotation"}},"id":"3484","type":"BoxZoomTool"},{"attributes":{"line_alpha":0.8,"line_color":"#e41a1c","line_width":4,"x":{"field":"year"},"y":{"field":"anomaly"}},"id":"3520","type":"Line"},{"attributes":{},"id":"3579","type":"Selection"},{"attributes":{},"id":"3482","type":"PanTool"},{"attributes":{},"id":"3485","type":"ResetTool"},{"attributes":{"plot":null,"text":"Yearly Temperature Difference from Mean 1931-1980 Temperature by Hemisphere","text_font_size":{"value":"14pt"}},"id":"3515","type":"Title"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":4,"x":{"field":"year"},"y":{"field":"anomaly"}},"id":"3521","type":"Line"},{"attributes":{"line_alpha":0.8,"line_color":"#4daf4a","line_width":4,"x":{"field":"year"},"y":{"field":"anomaly"}},"id":"3551","type":"Line"},{"attributes":{},"id":"3486","type":"SaveTool"},{"attributes":{"data_source":{"id":"3518","type":"ColumnDataSource"},"glyph":{"id":"3520","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3521","type":"Line"},"selection_glyph":null,"view":{"id":"3523","type":"CDSView"}},"id":"3522","type":"GlyphRenderer"},{"attributes":{"callback":null,"tooltips":[["Year","@year"],["Difference From Normal","@anomaly"]]},"id":"3481","type":"HoverTool"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":4,"x":{"field":"year"},"y":{"field":"anomaly"}},"id":"3552","type":"Line"},{"attributes":{"source":{"id":"3518","type":"ColumnDataSource"}},"id":"3523","type":"CDSView"},{"attributes":{"callback":null,"end":2018,"start":1880},"id":"3488","type":"Range1d"},{"attributes":{"data_source":{"id":"3549","type":"ColumnDataSource"},"glyph":{"id":"3551","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3552","type":"Line"},"selection_glyph":null,"view":{"id":"3554","type":"CDSView"}},"id":"3553","type":"GlyphRenderer"},{"attributes":{},"id":"3526","type":"BasicTickFormatter"},{"attributes":{"callback":null},"id":"3490","type":"DataRange1d"},{"attributes":{"source":{"id":"3549","type":"ColumnDataSource"}},"id":"3554","type":"CDSView"},{"attributes":{},"id":"3528","type":"BasicTickFormatter"},{"attributes":{},"id":"3492","type":"LinearScale"},{"attributes":{},"id":"3564","type":"UnionRenderers"},{"attributes":{"click_policy":"hide","items":[{"id":"3532","type":"LegendItem"},{"id":"3548","type":"LegendItem"},{"id":"3566","type":"LegendItem"}],"location":"top_left","plot":{"id":"3487","subtype":"Figure","type":"Plot"}},"id":"3531","type":"Legend"},{"attributes":{},"id":"3494","type":"LinearScale"},{"attributes":{},"id":"3565","type":"Selection"},{"attributes":{"label":{"value":"Global"},"renderers":[{"id":"3522","type":"GlyphRenderer"}]},"id":"3532","type":"LegendItem"},{"attributes":{"axis_label":"Year","formatter":{"id":"3526","type":"BasicTickFormatter"},"plot":{"id":"3487","subtype":"Figure","type":"Plot"},"ticker":{"id":"3497","type":"BasicTicker"}},"id":"3496","type":"LinearAxis"},{"attributes":{"label":{"value":"Southern Hemisphere"},"renderers":[{"id":"3553","type":"GlyphRenderer"}]},"id":"3566","type":"LegendItem"},{"attributes":{"callback":null,"data":{"anomaly":{"__ndarray__":"16NwPQrX079SuB6F61HIv+F6FK5H4cq/16NwPQrX07+F61G4HoXbv5qZmZmZmdm/PQrXo3A92r89CtejcD3av3E9CtejcM2/w/UoXI/Cxb/hehSuR+Hav6RwPQrXo9C/rkfhehSu17/NzMzMzMzcv1K4HoXrUdi/j8L1KFyP0r+amZmZmZnJv8P1KFyPwsW/j8L1KFyP0r/hehSuR+HKvwrXo3A9Cre/mpmZmZmZub9mZmZmZmbWv/YoXI/C9di/AAAAAAAA4L/Xo3A9CtfTv3E9CtejcM2/FK5H4XoU3r9xPQrXo3DdvxSuR+F6FN6/KVyPwvUo3L+amZmZmZnZv83MzMzMzNy/hetRuB6F279SuB6F61HIvylcj8L1KLy/CtejcD0K179I4XoUrkfhv65H4XoUrte/H4XrUbge1b8AAAAAAADQv+xRuB6F67G/uB6F61G4zr8K16NwPQrHv+xRuB6F68G/mpmZmZmZub+amZmZmZmpP5qZmZmZmbm/7FG4HoXrsb8zMzMzMzPTv3sUrkfhepQ/mpmZmZmZqT+amZmZmZmpv6RwPQrXo9C/exSuR+F6hL8K16NwPQq3v3sUrkfheqS/uB6F61G4vj+4HoXrUbi+P3sUrkfherQ/w/UoXI/CxT+4HoXrUbjOPylcj8L1KLw/MzMzMzMzwz9I4XoUrkfRPwrXo3A9Crc/exSuR+F6pD+4HoXrUbiuP3sUrkfheoS/uB6F61G4nr/D9Shcj8LFv5qZmZmZmak/uB6F61G4rj9xPQrXo3DNP3sUrkfheqS/mpmZmZmZub+kcD0K16PQv3sUrkfheqQ/w/UoXI/CxT8pXI/C9Si8P3sUrkfherQ/exSuR+F6tD8zMzMzMzPDP3sUrkfhesQ/UrgehetRyL+kcD0K16PAvwAAAAAAAAAAuB6F61G4nj+4HoXrUbiuv3sUrkfheoS/uB6F61G4nr97FK5H4XrEvwrXo3A9Cse/mpmZmZmZuT+amZmZmZnJv7gehetRuK6/4XoUrkfhyr8pXI/C9Si8P3sUrkfhepQ/exSuR+F6tD97FK5H4XrEP/YoXI/C9dg/mpmZmZmZqT+kcD0K16PQP3sUrkfheqQ/exSuR+F6hL+kcD0K16PAP0jhehSuR9E/UrgehetR2D+PwvUoXI/SP1K4HoXrUeA/PQrXo3A92j+4HoXrUbi+P1K4HoXrUcg/CtejcD0K1z+PwvUoXI/iP+xRuB6F69E/9ihcj8L14D9cj8L1KFznPwAAAAAAAOA/AAAAAAAA4D8pXI/C9SjkP7gehetRuOY/XI/C9Shc5z9xPQrXo3DlP4/C9Shcj+o/9ihcj8L16D/sUbgehevpP3sUrkfheuQ/FK5H4XoU5j+F61G4HoXrP2ZmZmZmZuY/UrgehetR6D+uR+F6FK7nP3sUrkfheuw/7FG4HoXr8T8pXI/C9Sj0P8P1KFyPwvE/rkfhehSu7z8=","dtype":"float64","shape":[139]},"year":{"__ndarray__":"WAcAAFkHAABaBwAAWwcAAFwHAABdBwAAXgcAAF8HAABgBwAAYQcAAGIHAABjBwAAZAcAAGUHAABmBwAAZwcAAGgHAABpBwAAagcAAGsHAABsBwAAbQcAAG4HAABvBwAAcAcAAHEHAAByBwAAcwcAAHQHAAB1BwAAdgcAAHcHAAB4BwAAeQcAAHoHAAB7BwAAfAcAAH0HAAB+BwAAfwcAAIAHAACBBwAAggcAAIMHAACEBwAAhQcAAIYHAACHBwAAiAcAAIkHAACKBwAAiwcAAIwHAACNBwAAjgcAAI8HAACQBwAAkQcAAJIHAACTBwAAlAcAAJUHAACWBwAAlwcAAJgHAACZBwAAmgcAAJsHAACcBwAAnQcAAJ4HAACfBwAAoAcAAKEHAACiBwAAowcAAKQHAAClBwAApgcAAKcHAACoBwAAqQcAAKoHAACrBwAArAcAAK0HAACuBwAArwcAALAHAACxBwAAsgcAALMHAAC0BwAAtQcAALYHAAC3BwAAuAcAALkHAAC6BwAAuwcAALwHAAC9BwAAvgcAAL8HAADABwAAwQcAAMIHAADDBwAAxAcAAMUHAADGBwAAxwcAAMgHAADJBwAAygcAAMsHAADMBwAAzQcAAM4HAADPBwAA0AcAANEHAADSBwAA0wcAANQHAADVBwAA1gcAANcHAADYBwAA2QcAANoHAADbBwAA3AcAAN0HAADeBwAA3wcAAOAHAADhBwAA4gcAAA==","dtype":"int32","shape":[139]}},"selected":{"id":"3565","type":"Selection"},"selection_policy":{"id":"3564","type":"UnionRenderers"}},"id":"3533","type":"ColumnDataSource"},{"attributes":{},"id":"3497","type":"BasicTicker"},{"attributes":{"plot":{"id":"3487","subtype":"Figure","type":"Plot"},"ticker":{"id":"3497","type":"BasicTicker"}},"id":"3500","type":"Grid"},{"attributes":{"line_alpha":0.8,"line_color":"#377eb8","line_width":4,"x":{"field":"year"},"y":{"field":"anomaly"}},"id":"3535","type":"Line"},{"attributes":{"axis_label":"Difference (Celsius)","formatter":{"id":"3528","type":"BasicTickFormatter"},"plot":{"id":"3487","subtype":"Figure","type":"Plot"},"ticker":{"id":"3502","type":"BasicTicker"}},"id":"3501","type":"LinearAxis"},{"attributes":{"line_alpha":0.1,"line_color":"#1f77b4","line_width":4,"x":{"field":"year"},"y":{"field":"anomaly"}},"id":"3536","type":"Line"},{"attributes":{},"id":"3502","type":"BasicTicker"},{"attributes":{"data_source":{"id":"3533","type":"ColumnDataSource"},"glyph":{"id":"3535","type":"Line"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"3536","type":"Line"},"selection_glyph":null,"view":{"id":"3538","type":"CDSView"}},"id":"3537","type":"GlyphRenderer"},{"attributes":{"dimension":1,"plot":{"id":"3487","subtype":"Figure","type":"Plot"},"ticker":{"id":"3502","type":"BasicTicker"}},"id":"3505","type":"Grid"},{"attributes":{"source":{"id":"3533","type":"ColumnDataSource"}},"id":"3538","type":"CDSView"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"3481","type":"HoverTool"},{"id":"3482","type":"PanTool"},{"id":"3483","type":"WheelZoomTool"},{"id":"3484","type":"BoxZoomTool"},{"id":"3485","type":"ResetTool"},{"id":"3486","type":"SaveTool"}]},"id":"3506","type":"Toolbar"},{"attributes":{"below":[{"id":"3496","type":"LinearAxis"}],"left":[{"id":"3501","type":"LinearAxis"}],"plot_height":800,"plot_width":1000,"renderers":[{"id":"3496","type":"LinearAxis"},{"id":"3500","type":"Grid"},{"id":"3501","type":"LinearAxis"},{"id":"3505","type":"Grid"},{"id":"3509","type":"BoxAnnotation"},{"id":"3366","type":"Span"},{"id":"3531","type":"Legend"},{"id":"3522","type":"GlyphRenderer"},{"id":"3537","type":"GlyphRenderer"},{"id":"3553","type":"GlyphRenderer"}],"title":{"id":"3515","type":"Title"},"toolbar":{"id":"3506","type":"Toolbar"},"x_range":{"id":"3488","type":"Range1d"},"x_scale":{"id":"3492","type":"LinearScale"},"y_range":{"id":"3490","type":"DataRange1d"},"y_scale":{"id":"3494","type":"LinearScale"}},"id":"3487","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"3546","type":"UnionRenderers"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"3509","type":"BoxAnnotation"}],"root_ids":["3487"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"31f5c6a3-1813-4754-971f-ee9fd536c0cc","roots":{"3487":"c46002a4-86c3-497f-8734-0cba02939fed"}}];
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