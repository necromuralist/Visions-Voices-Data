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
      };var element = document.getElementById("e0183ad8-47df-4d67-befe-c2c4ba24e369");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'e0183ad8-47df-4d67-befe-c2c4ba24e369' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"5be5ada7-9f19-46fd-ba2b-d159d9804ace":{"roots":{"references":[{"attributes":{"overlay":{"id":"6171","type":"BoxAnnotation"}},"id":"6165","type":"BoxZoomTool"},{"attributes":{"line_color":"crimson","line_width":2,"x":{"field":"Year"},"y":{"field":"measles"}},"id":"6225","type":"Line"},{"attributes":{"line_alpha":0.1,"line_color":"crimson","line_width":2,"x":{"field":"Year"},"y":{"field":"measles"}},"id":"6272","type":"Line"},{"attributes":{},"id":"6335","type":"CategoricalTickFormatter"},{"attributes":{},"id":"6164","type":"WheelZoomTool"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto"},"id":"6331","type":"Toolbar"},{"attributes":{"line_alpha":0.2,"line_color":"crimson","line_width":2,"x":{"field":"Year"},"y":{"field":"measles"}},"id":"6273","type":"Line"},{"attributes":{"children":[{"id":"6311","type":"Column"},{"id":"6315","subtype":"Figure","type":"Plot"}]},"id":"6332","type":"Column"},{"attributes":{"args":{"range":{"id":"6312","type":"FactorRange"}},"code":"range.setv({start: 0, end: range.factors.length})"},"id":"6314","type":"CustomJS"},{"attributes":{"data_source":{"id":"6268","type":"ColumnDataSource"},"glyph":{"id":"6271","type":"Line"},"hover_glyph":null,"muted_glyph":{"id":"6273","type":"Line"},"nonselection_glyph":{"id":"6272","type":"Line"},"selection_glyph":null,"view":{"id":"6275","type":"CDSView"}},"id":"6274","type":"GlyphRenderer"},{"attributes":{},"id":"6162","type":"SaveTool"},{"attributes":{},"id":"6327","type":"BasicTicker"},{"attributes":{},"id":"6163","type":"PanTool"},{"attributes":{"source":{"id":"6268","type":"ColumnDataSource"}},"id":"6275","type":"CDSView"},{"attributes":{"plot":null,"text":""},"id":"6334","type":"Title"},{"attributes":{"overlay":{"id":"6217","type":"BoxAnnotation"}},"id":"6211","type":"BoxZoomTool"},{"attributes":{},"id":"6150","type":"LinearScale"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"6142","type":"HoverTool"},{"id":"6162","type":"SaveTool"},{"id":"6163","type":"PanTool"},{"id":"6164","type":"WheelZoomTool"},{"id":"6165","type":"BoxZoomTool"},{"id":"6166","type":"ResetTool"}]},"id":"6167","type":"Toolbar"},{"attributes":{"line_alpha":0.2,"line_color":"crimson","line_width":2,"x":{"field":"Year"},"y":{"field":"measles"}},"id":"6227","type":"Line"},{"attributes":{"formatter":{"id":"6337","type":"BasicTickFormatter"},"plot":{"id":"6315","subtype":"Figure","type":"Plot"},"ticker":{"id":"6327","type":"BasicTicker"},"visible":false},"id":"6326","type":"LinearAxis"},{"attributes":{"line_alpha":0.1,"line_color":"crimson","line_width":2,"x":{"field":"Year"},"y":{"field":"measles"}},"id":"6226","type":"Line"},{"attributes":{},"id":"6278","type":"BasicTickFormatter"},{"attributes":{},"id":"6177","type":"Selection"},{"attributes":{"dimension":1,"grid_line_alpha":{"value":0},"plot":{"id":"6315","subtype":"Figure","type":"Plot"},"ticker":{"id":"6327","type":"BasicTicker"}},"id":"6330","type":"Grid"},{"attributes":{},"id":"6184","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"6322","type":"CategoricalAxis"}],"left":[{"id":"6326","type":"LinearAxis"}],"outline_line_alpha":{"value":0},"plot_height":53,"renderers":[{"id":"6322","type":"CategoricalAxis"},{"id":"6325","type":"Grid"},{"id":"6326","type":"LinearAxis"},{"id":"6330","type":"Grid"}],"title":{"id":"6334","type":"Title"},"toolbar":{"id":"6331","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"6312","type":"FactorRange"},"x_scale":{"id":"6318","type":"CategoricalScale"},"y_range":{"id":"6313","type":"Range1d"},"y_scale":{"id":"6320","type":"LinearScale"}},"id":"6315","subtype":"Figure","type":"Plot"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"6144","subtype":"Figure","type":"Plot"},"ticker":{"id":"6158","type":"BasicTicker"}},"id":"6161","type":"Grid"},{"attributes":{"axis_label":"Year","bounds":"auto","formatter":{"id":"6184","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"6144","subtype":"Figure","type":"Plot"},"ticker":{"id":"6153","type":"BasicTicker"},"visible":false},"id":"6152","type":"LinearAxis"},{"attributes":{},"id":"6318","type":"CategoricalScale"},{"attributes":{"data_source":{"id":"6222","type":"ColumnDataSource"},"glyph":{"id":"6225","type":"Line"},"hover_glyph":null,"muted_glyph":{"id":"6227","type":"Line"},"nonselection_glyph":{"id":"6226","type":"Line"},"selection_glyph":null,"view":{"id":"6229","type":"CDSView"}},"id":"6228","type":"GlyphRenderer"},{"attributes":{},"id":"6295","type":"UnionRenderers"},{"attributes":{},"id":"6320","type":"LinearScale"},{"attributes":{},"id":"6286","type":"UnionRenderers"},{"attributes":{"callback":null,"renderers":[{"id":"6274","type":"GlyphRenderer"}],"tooltips":[["Year","@{Year}"],["Measles Incidence","@{measles}"]]},"id":"6234","type":"HoverTool"},{"attributes":{"axis_label":"State","formatter":{"id":"6335","type":"CategoricalTickFormatter"},"major_label_orientation":0.0,"major_label_text_baseline":"middle","plot":{"id":"6315","subtype":"Figure","type":"Plot"},"ticker":{"id":"6323","type":"CategoricalTicker"}},"id":"6322","type":"CategoricalAxis"},{"attributes":{"grid_line_alpha":{"value":0},"plot":{"id":"6315","subtype":"Figure","type":"Plot"},"ticker":{"id":"6323","type":"CategoricalTicker"}},"id":"6325","type":"Grid"},{"attributes":{},"id":"6323","type":"CategoricalTicker"},{"attributes":{},"id":"6337","type":"BasicTickFormatter"},{"attributes":{},"id":"6158","type":"BasicTicker"},{"attributes":{"callback":null,"data":{"Year":[1928,1929,1930,1931,1932,1933,1934,1935,1936,1937,1938,1939,1940,1941,1942,1943,1944,1945,1946,1947,1948,1949,1950,1951,1952,1953,1954,1955,1956,1957,1958,1959,1960,1961,1962,1963,1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010],"measles":{"__ndarray__":"y+afMU2GGkD5gR/4gR8TQBrTZIA5SyhA9cSRXiv4DkCEc0aU9kYpQHDYPqULcghAly7IYfuUIkCRqCLE2zUkQLHh6ZWyjCJAN5wCac81AEB175CoIkQBQLXoG0+CtTZAFa5H4XooM0AXrkfherQDQNyTh4Va0ylAaWvllTBHMEAt7NyGs3gWQE0b6LSBThhApApx1z0kJECZ1AloImz0Pw2hwRAa7CVAMjMzMzMzJUAq4zkThEgHQKtH4XoUji5Ao0Y+JoHmE0DbExlI708jQL4FEhQ/JjFADnTaQKe1IUDh39/f398iQJdkMf7KFyhATBAi9ZNcH0DxiyW/WFolQFllwxHTniJAojvVbgiiF0DxycNCrSksQFoVEltSagxAk4eFWtP8KkC1Uiu1UqsTQCRYi77xJApAWuiFXuiFC0BeJ3ZiJ3bWPxaMSuoENKE/W+xtYmG+2T/StcqGI6blP0cDeAskKOI/X8cWe5tY4D9sMwx4Dy+oPzHab8pzCcQ/TdGRXP5Dyj8mba28EubQP2prDmP2vcs/f2q8dJMY4D8h2/l+ary0P20a0KYBbWo/MKl8GPfrkj8SERERERGRP9pApw102rQ/R7bz/dR4qT8/QVpnegq8PxIyVHaYupw/nhLkKUGecj8LlJLhNwOfP87ZkWWFNsc/jB9mGwEspT8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H98E7I3IXuDPzJrDFFUC5Q/Ti5oaq8KiD8AAAAAAAAAAAAAAAAAAPh/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fw==","dtype":"float64","shape":[83]}},"selected":{"id":"6269","type":"Selection"},"selection_policy":{"id":"6304","type":"UnionRenderers"}},"id":"6268","type":"ColumnDataSource"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"6144","subtype":"Figure","type":"Plot"},"ticker":{"id":"6153","type":"BasicTicker"}},"id":"6156","type":"Grid"},{"attributes":{},"id":"6212","type":"ResetTool"},{"attributes":{"axis_label":"Measles Incidence","bounds":"auto","formatter":{"id":"6186","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"6144","subtype":"Figure","type":"Plot"},"ticker":{"id":"6158","type":"BasicTicker"},"visible":false},"id":"6157","type":"LinearAxis"},{"attributes":{"below":[{"id":"6244","type":"LinearAxis"}],"left":[{"id":"6249","type":"LinearAxis"}],"min_border_bottom":3,"min_border_left":3,"min_border_right":3,"min_border_top":3,"plot_height":120,"plot_width":200,"renderers":[{"id":"6244","type":"LinearAxis"},{"id":"6248","type":"Grid"},{"id":"6249","type":"LinearAxis"},{"id":"6253","type":"Grid"},{"id":"6263","type":"BoxAnnotation"},{"id":"6274","type":"GlyphRenderer"}],"title":{"id":"6235","type":"Title"},"toolbar":{"id":"6259","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"6140","type":"Range1d"},"x_scale":{"id":"6240","type":"LinearScale"},"y_range":{"id":"6141","type":"Range1d"},"y_scale":{"id":"6242","type":"LinearScale"}},"id":"6236","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"6276","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":""},"id":"6143","type":"Title"},{"attributes":{},"id":"6232","type":"BasicTickFormatter"},{"attributes":{"plot":null,"text":""},"id":"6235","type":"Title"},{"attributes":{},"id":"6148","type":"LinearScale"},{"attributes":{"source":{"id":"6222","type":"ColumnDataSource"}},"id":"6229","type":"CDSView"},{"attributes":{"below":[{"id":"6152","type":"LinearAxis"}],"left":[{"id":"6157","type":"LinearAxis"}],"min_border_bottom":3,"min_border_left":3,"min_border_right":3,"min_border_top":3,"plot_height":120,"plot_width":200,"renderers":[{"id":"6152","type":"LinearAxis"},{"id":"6156","type":"Grid"},{"id":"6157","type":"LinearAxis"},{"id":"6161","type":"Grid"},{"id":"6171","type":"BoxAnnotation"},{"id":"6182","type":"GlyphRenderer"}],"title":{"id":"6143","type":"Title"},"toolbar":{"id":"6167","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"6140","type":"Range1d"},"x_scale":{"id":"6148","type":"LinearScale"},"y_range":{"id":"6141","type":"Range1d"},"y_scale":{"id":"6150","type":"LinearScale"}},"id":"6144","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"6240","type":"LinearScale"},{"attributes":{"callback":null,"data":{"Year":[1928,1929,1930,1931,1932,1933,1934,1935,1936,1937,1938,1939,1940,1941,1942,1943,1944,1945,1946,1947,1948,1949,1950,1951,1952,1953,1954,1955,1956,1957,1958,1959,1960,1961,1962,1963,1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010],"measles":{"__ndarray__":"lI5PX1sc6D/xhclUwagJQAGdNtBpYxBALrHtEtsu6T99+byXz3vZP5dDi2znWxNAQuLw2nsKGEDTDzX9UJMQQO/STWIQWBdAMTMzMzNDFEAnA8xZNl8gQLe4uLi4OCtAbz0K16MgHEDjehSuRwEBQF9LyAc9mx9AI+n+wqeyK0C1k7ZWXgkPQAR+/asBOBVA8dJNYhBYIUBMfrHkFwvxPwR5SpCnBBlAR+F6FK6nI0AIgZVDi+wZQKzeTtpaeR5ABzptoNNWEEDt3IazeJobQDss1JrmXS1AbbvlBMvIA0DptIFOG+gYQBo8R6BoKyVAuFtOsIy8KUD8xZJfLPkVQBBjIKjKnyNADNejcD2KFkCK9pvyXAISQNxApw102idAXJHE9ypeGkBjDaP9pnwhQF3EKpH3XRNAnhd6oRd68j+f2Imd2ImtP+RzMD4H49M/XE6wjDyI0j9DwCjV5HHnP0hoJWU8Z9I/Q/FjzF1L5D+6Is6PAwjCP5iXl5eXl6c/s/lnTJNBEUCiWqDg70XZPwmL2fTckYM/Oluqs6U6qz8AAAAAAAD4fyD4gR/4gX8/AAAAAAAA+H+amZmZmZmZPwAAAAAAAPh/zDnnnHPOyT8e1EEd1EFtPwAAAAAAAPh/AAAAAAAA+H8RERERERHBP36w4xZKfbA/xNETHD3B9T8AAAAAAAD4fwAAAAAAAPh/uB6F61G4fj/hE0d6reCTP3sUrkfhenQ/XI/C9ShcGkB7FK5H4Xq0PwAAAAAAAPh/AAAAAAAA+H8yLpFaiiBtPwAAAAAAAAAAAAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fw==","dtype":"float64","shape":[83]}},"selected":{"id":"6177","type":"Selection"},"selection_policy":{"id":"6286","type":"UnionRenderers"}},"id":"6176","type":"ColumnDataSource"},{"attributes":{},"id":"6153","type":"BasicTicker"},{"attributes":{},"id":"6242","type":"LinearScale"},{"attributes":{"callback":null,"renderers":[{"id":"6182","type":"GlyphRenderer"}],"tooltips":[["Year","@{Year}"],["Measles Incidence","@{measles}"]]},"id":"6142","type":"HoverTool"},{"attributes":{"axis_label":"Year","bounds":"auto","formatter":{"id":"6276","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"6236","subtype":"Figure","type":"Plot"},"ticker":{"id":"6245","type":"BasicTicker"},"visible":false},"id":"6244","type":"LinearAxis"},{"attributes":{"callback":null,"end":22.709019607843135,"reset_end":22.709019607843135,"reset_start":0.0,"tags":[[["measles","Measles Incidence",null]]]},"id":"6141","type":"Range1d"},{"attributes":{"callback":null,"end":2010.0,"reset_end":2010.0,"reset_start":1928.0,"start":1928.0,"tags":[[["Year","Year",null]]]},"id":"6140","type":"Range1d"},{"attributes":{},"id":"6245","type":"BasicTicker"},{"attributes":{"callback":{"id":"6314","type":"CustomJS"},"factors":["Idaho","Oregon","Washington"]},"id":"6312","type":"FactorRange"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"6236","subtype":"Figure","type":"Plot"},"ticker":{"id":"6245","type":"BasicTicker"}},"id":"6248","type":"Grid"},{"attributes":{},"id":"6194","type":"LinearScale"},{"attributes":{},"id":"6199","type":"BasicTicker"},{"attributes":{"axis_label":"Measles Incidence","bounds":"auto","formatter":{"id":"6278","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"6236","subtype":"Figure","type":"Plot"},"ticker":{"id":"6250","type":"BasicTicker"},"visible":false},"id":"6249","type":"LinearAxis"},{"attributes":{"callback":null},"id":"6313","type":"Range1d"},{"attributes":{},"id":"6166","type":"ResetTool"},{"attributes":{},"id":"6196","type":"LinearScale"},{"attributes":{},"id":"6250","type":"BasicTicker"},{"attributes":{"axis_label":"Year","bounds":"auto","formatter":{"id":"6230","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"6190","subtype":"Figure","type":"Plot"},"ticker":{"id":"6199","type":"BasicTicker"},"visible":false},"id":"6198","type":"LinearAxis"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"6236","subtype":"Figure","type":"Plot"},"ticker":{"id":"6250","type":"BasicTicker"}},"id":"6253","type":"Grid"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"6171","type":"BoxAnnotation"},{"attributes":{"axis_label":"Measles Incidence","bounds":"auto","formatter":{"id":"6232","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"6190","subtype":"Figure","type":"Plot"},"ticker":{"id":"6204","type":"BasicTicker"},"visible":false},"id":"6203","type":"LinearAxis"},{"attributes":{"plot":null,"text":""},"id":"6189","type":"Title"},{"attributes":{"line_color":"crimson","line_width":2,"x":{"field":"Year"},"y":{"field":"measles"}},"id":"6179","type":"Line"},{"attributes":{},"id":"6269","type":"Selection"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"6190","subtype":"Figure","type":"Plot"},"ticker":{"id":"6204","type":"BasicTicker"}},"id":"6207","type":"Grid"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"6234","type":"HoverTool"},{"id":"6254","type":"SaveTool"},{"id":"6255","type":"PanTool"},{"id":"6256","type":"WheelZoomTool"},{"id":"6257","type":"BoxZoomTool"},{"id":"6258","type":"ResetTool"}]},"id":"6259","type":"Toolbar"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"6188","type":"HoverTool"},{"id":"6208","type":"SaveTool"},{"id":"6209","type":"PanTool"},{"id":"6210","type":"WheelZoomTool"},{"id":"6211","type":"BoxZoomTool"},{"id":"6212","type":"ResetTool"}]},"id":"6213","type":"Toolbar"},{"attributes":{"line_alpha":0.1,"line_color":"crimson","line_width":2,"x":{"field":"Year"},"y":{"field":"measles"}},"id":"6180","type":"Line"},{"attributes":{},"id":"6204","type":"BasicTicker"},{"attributes":{"children":[{"id":"6307","type":"Row"}]},"id":"6308","type":"Column"},{"attributes":{},"id":"6254","type":"SaveTool"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"6190","subtype":"Figure","type":"Plot"},"ticker":{"id":"6199","type":"BasicTicker"}},"id":"6202","type":"Grid"},{"attributes":{"line_alpha":0.2,"line_color":"crimson","line_width":2,"x":{"field":"Year"},"y":{"field":"measles"}},"id":"6181","type":"Line"},{"attributes":{},"id":"6255","type":"PanTool"},{"attributes":{"toolbar":{"id":"6309","type":"ProxyToolbar"},"toolbar_location":"above"},"id":"6310","type":"ToolbarBox"},{"attributes":{"data_source":{"id":"6176","type":"ColumnDataSource"},"glyph":{"id":"6179","type":"Line"},"hover_glyph":null,"muted_glyph":{"id":"6181","type":"Line"},"nonselection_glyph":{"id":"6180","type":"Line"},"selection_glyph":null,"view":{"id":"6183","type":"CDSView"}},"id":"6182","type":"GlyphRenderer"},{"attributes":{},"id":"6256","type":"WheelZoomTool"},{"attributes":{"source":{"id":"6176","type":"ColumnDataSource"}},"id":"6183","type":"CDSView"},{"attributes":{"overlay":{"id":"6263","type":"BoxAnnotation"}},"id":"6257","type":"BoxZoomTool"},{"attributes":{"children":[{"id":"6310","type":"ToolbarBox"},{"id":"6308","type":"Column"}]},"id":"6311","type":"Column"},{"attributes":{},"id":"6223","type":"Selection"},{"attributes":{},"id":"6258","type":"ResetTool"},{"attributes":{},"id":"6210","type":"WheelZoomTool"},{"attributes":{},"id":"6186","type":"BasicTickFormatter"},{"attributes":{"tools":[{"id":"6142","type":"HoverTool"},{"id":"6162","type":"SaveTool"},{"id":"6163","type":"PanTool"},{"id":"6164","type":"WheelZoomTool"},{"id":"6165","type":"BoxZoomTool"},{"id":"6166","type":"ResetTool"},{"id":"6188","type":"HoverTool"},{"id":"6208","type":"SaveTool"},{"id":"6209","type":"PanTool"},{"id":"6210","type":"WheelZoomTool"},{"id":"6211","type":"BoxZoomTool"},{"id":"6212","type":"ResetTool"},{"id":"6234","type":"HoverTool"},{"id":"6254","type":"SaveTool"},{"id":"6255","type":"PanTool"},{"id":"6256","type":"WheelZoomTool"},{"id":"6257","type":"BoxZoomTool"},{"id":"6258","type":"ResetTool"}]},"id":"6309","type":"ProxyToolbar"},{"attributes":{},"id":"6230","type":"BasicTickFormatter"},{"attributes":{},"id":"6208","type":"SaveTool"},{"attributes":{"callback":null,"data":{"Year":[1928,1929,1930,1931,1932,1933,1934,1935,1936,1937,1938,1939,1940,1941,1942,1943,1944,1945,1946,1947,1948,1949,1950,1951,1952,1953,1954,1955,1956,1957,1958,1959,1960,1961,1962,1963,1964,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010],"measles":{"__ndarray__":"XlscLCgpEUBPG+i0gU4jQFT3DokqQhVAvV1175CoEkBv5EZu5MYjQO4dElWEuBFAT+zETuzEDUDq+PS1xSErQDZeukkMYjJA948pw1z25z+j/aY8l8ACQD09PT09PRFANdBpA532K0DntIFOG1ApQIIExY8x9yNAEw3cIqCHLUCHxJaUGmoUQA902kCnDQpANMCcZfNvIUD01F3HFnv3PxOQ0TABGSFA9LXFwYJSKkB98rBQa5rvP4y9TSzMNylAlEWb0e0eEUChfNzUKcAnQCzPJZA1zBJAjTaj2z0YGEAm6fj0tcUEQH19fX19PTFAYTJVMCopJUCvR+F6FKYiQPfa4mBBCShAQ0JCQkJCGUBVnksga3gtQPYoXI/C9RZARKoQd93DIUD3KFyPwvULQOWBG7VO6ANAh0QVId6u+j9HbuRGbuTiP7B4RRLfq8g/F65H4XoU3j+q7jq22NvUP6aaPO4sYcc/BvAWSFD82D97FK5H4XrQPziM2fduBcY/Re0Z3wBkwz/NUjpDV8TRP0HXfLUZBtw/8rBQa5p3rD+xqTTk3Gd3P08b6LSBTns/uR6F61G4nj/fvJp4VjSCPwAAAAAAAPh/4thaenL0cz8wlvxiyS+GPw102kCnDbA/4clqeWMEoz+PwvUoXI+yP9vO91Pjpas/K1cMX4o/sj+39xTpKkh8PwAAAAAAAPh/AAAAAAAA+H/7EbgfgfthP+ATR3qt4IM/CtejcD0Ktz8AAAAAAAD4fzWt480JJWo/AAAAAAAA+H8zdEWcHwdwPwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fwAAAAAAAPh/AAAAAAAA+H8AAAAAAAD4fw==","dtype":"float64","shape":[83]}},"selected":{"id":"6223","type":"Selection"},"selection_policy":{"id":"6295","type":"UnionRenderers"}},"id":"6222","type":"ColumnDataSource"},{"attributes":{},"id":"6304","type":"UnionRenderers"},{"attributes":{"callback":null,"renderers":[{"id":"6228","type":"GlyphRenderer"}],"tooltips":[["Year","@{Year}"],["Measles Incidence","@{measles}"]]},"id":"6188","type":"HoverTool"},{"attributes":{},"id":"6209","type":"PanTool"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"6217","type":"BoxAnnotation"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"6263","type":"BoxAnnotation"},{"attributes":{"children":[{"id":"6144","subtype":"Figure","type":"Plot"},{"id":"6190","subtype":"Figure","type":"Plot"},{"id":"6236","subtype":"Figure","type":"Plot"}]},"id":"6307","type":"Row"},{"attributes":{"below":[{"id":"6198","type":"LinearAxis"}],"left":[{"id":"6203","type":"LinearAxis"}],"min_border_bottom":3,"min_border_left":3,"min_border_right":3,"min_border_top":3,"plot_height":120,"plot_width":200,"renderers":[{"id":"6198","type":"LinearAxis"},{"id":"6202","type":"Grid"},{"id":"6203","type":"LinearAxis"},{"id":"6207","type":"Grid"},{"id":"6217","type":"BoxAnnotation"},{"id":"6228","type":"GlyphRenderer"}],"title":{"id":"6189","type":"Title"},"toolbar":{"id":"6213","type":"Toolbar"},"toolbar_location":null,"x_range":{"id":"6140","type":"Range1d"},"x_scale":{"id":"6194","type":"LinearScale"},"y_range":{"id":"6141","type":"Range1d"},"y_scale":{"id":"6196","type":"LinearScale"}},"id":"6190","subtype":"Figure","type":"Plot"},{"attributes":{"line_color":"crimson","line_width":2,"x":{"field":"Year"},"y":{"field":"measles"}},"id":"6271","type":"Line"}],"root_ids":["6332"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"5be5ada7-9f19-46fd-ba2b-d159d9804ace","roots":{"6332":"e0183ad8-47df-4d67-befe-c2c4ba24e369"}}];
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