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
      };var element = document.getElementById("410280c0-48c7-445f-9e4c-001a2b350d06");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid '410280c0-48c7-445f-9e4c-001a2b350d06' but no matching script tag was found. ")
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
                    
                  var docs_json = '{"002bbc04-3e66-433a-9e48-d89bd4fa78c8":{"roots":{"references":[{"attributes":{},"id":"37107","type":"Selection"},{"attributes":{},"id":"37069","type":"BasicTickFormatter"},{"attributes":{},"id":"37056","type":"PanTool"},{"attributes":{"callback":null,"renderers":[{"id":"37079","type":"GlyphRenderer"},{"id":"37095","type":"GlyphRenderer"},{"id":"37112","type":"GlyphRenderer"}],"tooltips":[["target","@{target}"],["sepal length (cm)","@{sepal_length_left_parenthesis_cm_right_parenthesis}"],["petal length (cm)","@{petal_length_left_parenthesis_cm_right_parenthesis}"]]},"id":"37033","type":"HoverTool"},{"attributes":{},"id":"37043","type":"LinearScale"},{"attributes":{},"id":"37103","type":"UnionRenderers"},{"attributes":{"source":{"id":"37106","type":"ColumnDataSource"}},"id":"37113","type":"CDSView"},{"attributes":{"click_policy":"mute","items":[{"id":"37088","type":"LegendItem"},{"id":"37105","type":"LegendItem"},{"id":"37124","type":"LegendItem"}],"location":[0,0],"plot":{"id":"37037","subtype":"Figure","type":"Plot"}},"id":"37087","type":"Legend"},{"attributes":{"source":{"id":"37089","type":"ColumnDataSource"}},"id":"37096","type":"CDSView"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.2},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":5.477225575051661},"x":{"field":"sepal length (cm)"},"y":{"field":"petal length (cm)"}},"id":"37078","type":"Scatter"},{"attributes":{"data_source":{"id":"37089","type":"ColumnDataSource"},"glyph":{"id":"37092","type":"Scatter"},"hover_glyph":null,"muted_glyph":{"id":"37094","type":"Scatter"},"nonselection_glyph":{"id":"37093","type":"Scatter"},"selection_glyph":null,"view":{"id":"37096","type":"CDSView"}},"id":"37095","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":5.477225575051661},"x":{"field":"sepal length (cm)"},"y":{"field":"petal length (cm)"}},"id":"37076","type":"Scatter"},{"attributes":{"label":{"value":"versicolor"},"renderers":[{"id":"37095","type":"GlyphRenderer"}]},"id":"37105","type":"LegendItem"},{"attributes":{"callback":null,"data":{"petal length (cm)":{"__ndarray__":"AAAAAAAAGEBmZmZmZmYUQJqZmZmZmRdAZmZmZmZmFkAzMzMzMzMXQGZmZmZmZhpAAAAAAAAAEkAzMzMzMzMZQDMzMzMzMxdAZmZmZmZmGEBmZmZmZmYUQDMzMzMzMxVAAAAAAAAAFkAAAAAAAAAUQGZmZmZmZhRAMzMzMzMzFUAAAAAAAAAWQM3MzMzMzBpAmpmZmZmZG0AAAAAAAAAUQM3MzMzMzBZAmpmZmZmZE0DNzMzMzMwaQJqZmZmZmRNAzczMzMzMFkAAAAAAAAAYQDMzMzMzMxNAmpmZmZmZE0BmZmZmZmYWQDMzMzMzMxdAZmZmZmZmGECamZmZmZkZQGZmZmZmZhZAZmZmZmZmFEBmZmZmZmYWQGZmZmZmZhhAZmZmZmZmFkAAAAAAAAAWQDMzMzMzMxNAmpmZmZmZFUBmZmZmZmYWQGZmZmZmZhRAZmZmZmZmFECamZmZmZkXQM3MzMzMzBZAzczMzMzMFEAAAAAAAAAUQM3MzMzMzBRAmpmZmZmZFUBmZmZmZmYUQA==","dtype":"float64","shape":[50]},"petal_length_left_parenthesis_cm_right_parenthesis":{"__ndarray__":"AAAAAAAAGEBmZmZmZmYUQJqZmZmZmRdAZmZmZmZmFkAzMzMzMzMXQGZmZmZmZhpAAAAAAAAAEkAzMzMzMzMZQDMzMzMzMxdAZmZmZmZmGEBmZmZmZmYUQDMzMzMzMxVAAAAAAAAAFkAAAAAAAAAUQGZmZmZmZhRAMzMzMzMzFUAAAAAAAAAWQM3MzMzMzBpAmpmZmZmZG0AAAAAAAAAUQM3MzMzMzBZAmpmZmZmZE0DNzMzMzMwaQJqZmZmZmRNAzczMzMzMFkAAAAAAAAAYQDMzMzMzMxNAmpmZmZmZE0BmZmZmZmYWQDMzMzMzMxdAZmZmZmZmGECamZmZmZkZQGZmZmZmZhZAZmZmZmZmFEBmZmZmZmYWQGZmZmZmZhhAZmZmZmZmFkAAAAAAAAAWQDMzMzMzMxNAmpmZmZmZFUBmZmZmZmYWQGZmZmZmZhRAZmZmZmZmFECamZmZmZkXQM3MzMzMzBZAzczMzMzMFEAAAAAAAAAUQM3MzMzMzBRAmpmZmZmZFUBmZmZmZmYUQA==","dtype":"float64","shape":[50]},"sepal length (cm)":{"__ndarray__":"MzMzMzMzGUAzMzMzMzMXQGZmZmZmZhxAMzMzMzMzGUAAAAAAAAAaQGZmZmZmZh5AmpmZmZmZE0AzMzMzMzMdQM3MzMzMzBpAzczMzMzMHEAAAAAAAAAaQJqZmZmZmRlAMzMzMzMzG0DNzMzMzMwWQDMzMzMzMxdAmpmZmZmZGUAAAAAAAAAaQM3MzMzMzB5AzczMzMzMHkAAAAAAAAAYQJqZmZmZmRtAZmZmZmZmFkDNzMzMzMweQDMzMzMzMxlAzczMzMzMGkDNzMzMzMwcQM3MzMzMzBhAZmZmZmZmGECamZmZmZkZQM3MzMzMzBxAmpmZmZmZHUCamZmZmZkfQJqZmZmZmRlAMzMzMzMzGUBmZmZmZmYYQM3MzMzMzB5AMzMzMzMzGUCamZmZmZkZQAAAAAAAABhAmpmZmZmZG0DNzMzMzMwaQJqZmZmZmRtAMzMzMzMzF0AzMzMzMzMbQM3MzMzMzBpAzczMzMzMGkAzMzMzMzMZQAAAAAAAABpAzczMzMzMGECamZmZmZkXQA==","dtype":"float64","shape":[50]},"sepal_length_left_parenthesis_cm_right_parenthesis":{"__ndarray__":"MzMzMzMzGUAzMzMzMzMXQGZmZmZmZhxAMzMzMzMzGUAAAAAAAAAaQGZmZmZmZh5AmpmZmZmZE0AzMzMzMzMdQM3MzMzMzBpAzczMzMzMHEAAAAAAAAAaQJqZmZmZmRlAMzMzMzMzG0DNzMzMzMwWQDMzMzMzMxdAmpmZmZmZGUAAAAAAAAAaQM3MzMzMzB5AzczMzMzMHkAAAAAAAAAYQJqZmZmZmRtAZmZmZmZmFkDNzMzMzMweQDMzMzMzMxlAzczMzMzMGkDNzMzMzMwcQM3MzMzMzBhAZmZmZmZmGECamZmZmZkZQM3MzMzMzBxAmpmZmZmZHUCamZmZmZkfQJqZmZmZmRlAMzMzMzMzGUBmZmZmZmYYQM3MzMzMzB5AMzMzMzMzGUCamZmZmZkZQAAAAAAAABhAmpmZmZmZG0DNzMzMzMwaQJqZmZmZmRtAMzMzMzMzF0AzMzMzMzMbQM3MzMzMzBpAzczMzMzMGkAzMzMzMzMZQAAAAAAAABpAzczMzMzMGECamZmZmZkXQA==","dtype":"float64","shape":[50]},"target":["virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica","virginica"]},"selected":{"id":"37107","type":"Selection"},"selection_policy":{"id":"37135","type":"UnionRenderers"}},"id":"37106","type":"ColumnDataSource"},{"attributes":{"callback":null,"end":6.9,"reset_end":6.9,"reset_start":1.0,"start":1.0,"tags":[[["petal length (cm)","petal length (cm)",null]]]},"id":"37032","type":"Range1d"},{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"37033","type":"HoverTool"},{"id":"37055","type":"SaveTool"},{"id":"37056","type":"PanTool"},{"id":"37057","type":"WheelZoomTool"},{"id":"37058","type":"BoxZoomTool"},{"id":"37059","type":"ResetTool"}]},"id":"37060","type":"Toolbar"},{"attributes":{"callback":null,"end":7.9,"reset_end":7.9,"reset_start":4.3,"start":4.3,"tags":[[["sepal length (cm)","sepal length (cm)",null]]]},"id":"37031","type":"Range1d"},{"attributes":{"grid_line_color":{"value":null},"plot":{"id":"37037","subtype":"Figure","type":"Plot"},"ticker":{"id":"37046","type":"BasicTicker"}},"id":"37049","type":"Grid"},{"attributes":{"source":{"id":"37073","type":"ColumnDataSource"}},"id":"37080","type":"CDSView"},{"attributes":{"data_source":{"id":"37106","type":"ColumnDataSource"},"glyph":{"id":"37109","type":"Scatter"},"hover_glyph":null,"muted_glyph":{"id":"37111","type":"Scatter"},"nonselection_glyph":{"id":"37110","type":"Scatter"},"selection_glyph":null,"view":{"id":"37113","type":"CDSView"}},"id":"37112","type":"GlyphRenderer"},{"attributes":{},"id":"37090","type":"Selection"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#ff7f0e"},"line_alpha":{"value":0.2},"line_color":{"value":"#ff7f0e"},"size":{"units":"screen","value":5.477225575051661},"x":{"field":"sepal length (cm)"},"y":{"field":"petal length (cm)"}},"id":"37094","type":"Scatter"},{"attributes":{},"id":"37122","type":"UnionRenderers"},{"attributes":{},"id":"37135","type":"UnionRenderers"},{"attributes":{"overlay":{"id":"37064","type":"BoxAnnotation"}},"id":"37058","type":"BoxZoomTool"},{"attributes":{"axis_label":"sepal length (cm)","bounds":"auto","formatter":{"id":"37069","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"37037","subtype":"Figure","type":"Plot"},"ticker":{"id":"37046","type":"BasicTicker"}},"id":"37045","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#ff7f0e"},"line_alpha":{"value":0.5},"line_color":{"value":"#ff7f0e"},"size":{"units":"screen","value":5.477225575051661},"x":{"field":"sepal length (cm)"},"y":{"field":"petal length (cm)"}},"id":"37093","type":"Scatter"},{"attributes":{"fill_alpha":{"value":0.2},"fill_color":{"value":"#2ca02c"},"line_alpha":{"value":0.2},"line_color":{"value":"#2ca02c"},"size":{"units":"screen","value":5.477225575051661},"x":{"field":"sepal length (cm)"},"y":{"field":"petal length (cm)"}},"id":"37111","type":"Scatter"},{"attributes":{"axis_label":"petal length (cm)","bounds":"auto","formatter":{"id":"37071","type":"BasicTickFormatter"},"major_label_orientation":"horizontal","plot":{"id":"37037","subtype":"Figure","type":"Plot"},"ticker":{"id":"37051","type":"BasicTicker"}},"id":"37050","type":"LinearAxis"},{"attributes":{},"id":"37041","type":"LinearScale"},{"attributes":{},"id":"37071","type":"BasicTickFormatter"},{"attributes":{},"id":"37057","type":"WheelZoomTool"},{"attributes":{"label":{"value":"virginica"},"renderers":[{"id":"37112","type":"GlyphRenderer"}]},"id":"37124","type":"LegendItem"},{"attributes":{"data_source":{"id":"37073","type":"ColumnDataSource"},"glyph":{"id":"37076","type":"Scatter"},"hover_glyph":null,"muted_glyph":{"id":"37078","type":"Scatter"},"nonselection_glyph":{"id":"37077","type":"Scatter"},"selection_glyph":null,"view":{"id":"37080","type":"CDSView"}},"id":"37079","type":"GlyphRenderer"},{"attributes":{"plot":null,"text":"Iris Sepal Length vs Petal Length"},"id":"37036","type":"Title"},{"attributes":{"callback":null,"data":{"petal length (cm)":{"__ndarray__":"ZmZmZmZm9j9mZmZmZmb2P83MzMzMzPQ/AAAAAAAA+D9mZmZmZmb2PzMzMzMzM/s/ZmZmZmZm9j8AAAAAAAD4P2ZmZmZmZvY/AAAAAAAA+D8AAAAAAAD4P5qZmZmZmfk/ZmZmZmZm9j+amZmZmZnxPzMzMzMzM/M/AAAAAAAA+D/NzMzMzMz0P2ZmZmZmZvY/MzMzMzMz+z8AAAAAAAD4PzMzMzMzM/s/AAAAAAAA+D8AAAAAAADwPzMzMzMzM/s/ZmZmZmZm/j+amZmZmZn5P5qZmZmZmfk/AAAAAAAA+D9mZmZmZmb2P5qZmZmZmfk/mpmZmZmZ+T8AAAAAAAD4PwAAAAAAAPg/ZmZmZmZm9j8AAAAAAAD4PzMzMzMzM/M/zczMzMzM9D9mZmZmZmb2P83MzMzMzPQ/AAAAAAAA+D/NzMzMzMz0P83MzMzMzPQ/zczMzMzM9D+amZmZmZn5P2ZmZmZmZv4/ZmZmZmZm9j+amZmZmZn5P2ZmZmZmZvY/AAAAAAAA+D9mZmZmZmb2Pw==","dtype":"float64","shape":[50]},"petal_length_left_parenthesis_cm_right_parenthesis":{"__ndarray__":"ZmZmZmZm9j9mZmZmZmb2P83MzMzMzPQ/AAAAAAAA+D9mZmZmZmb2PzMzMzMzM/s/ZmZmZmZm9j8AAAAAAAD4P2ZmZmZmZvY/AAAAAAAA+D8AAAAAAAD4P5qZmZmZmfk/ZmZmZmZm9j+amZmZmZnxPzMzMzMzM/M/AAAAAAAA+D/NzMzMzMz0P2ZmZmZmZvY/MzMzMzMz+z8AAAAAAAD4PzMzMzMzM/s/AAAAAAAA+D8AAAAAAADwPzMzMzMzM/s/ZmZmZmZm/j+amZmZmZn5P5qZmZmZmfk/AAAAAAAA+D9mZmZmZmb2P5qZmZmZmfk/mpmZmZmZ+T8AAAAAAAD4PwAAAAAAAPg/ZmZmZmZm9j8AAAAAAAD4PzMzMzMzM/M/zczMzMzM9D9mZmZmZmb2P83MzMzMzPQ/AAAAAAAA+D/NzMzMzMz0P83MzMzMzPQ/zczMzMzM9D+amZmZmZn5P2ZmZmZmZv4/ZmZmZmZm9j+amZmZmZn5P2ZmZmZmZvY/AAAAAAAA+D9mZmZmZmb2Pw==","dtype":"float64","shape":[50]},"sepal length (cm)":{"__ndarray__":"ZmZmZmZmFECamZmZmZkTQM3MzMzMzBJAZmZmZmZmEkAAAAAAAAAUQJqZmZmZmRVAZmZmZmZmEkAAAAAAAAAUQJqZmZmZmRFAmpmZmZmZE0CamZmZmZkVQDMzMzMzMxNAMzMzMzMzE0AzMzMzMzMRQDMzMzMzMxdAzczMzMzMFkCamZmZmZkVQGZmZmZmZhRAzczMzMzMFkBmZmZmZmYUQJqZmZmZmRVAZmZmZmZmFEBmZmZmZmYSQGZmZmZmZhRAMzMzMzMzE0AAAAAAAAAUQAAAAAAAABRAzczMzMzMFEDNzMzMzMwUQM3MzMzMzBJAMzMzMzMzE0CamZmZmZkVQM3MzMzMzBRAAAAAAAAAFkCamZmZmZkTQAAAAAAAABRAAAAAAAAAFkCamZmZmZkTQJqZmZmZmRFAZmZmZmZmFEAAAAAAAAAUQAAAAAAAABJAmpmZmZmZEUAAAAAAAAAUQGZmZmZmZhRAMzMzMzMzE0BmZmZmZmYUQGZmZmZmZhJAMzMzMzMzFUAAAAAAAAAUQA==","dtype":"float64","shape":[50]},"sepal_length_left_parenthesis_cm_right_parenthesis":{"__ndarray__":"ZmZmZmZmFECamZmZmZkTQM3MzMzMzBJAZmZmZmZmEkAAAAAAAAAUQJqZmZmZmRVAZmZmZmZmEkAAAAAAAAAUQJqZmZmZmRFAmpmZmZmZE0CamZmZmZkVQDMzMzMzMxNAMzMzMzMzE0AzMzMzMzMRQDMzMzMzMxdAzczMzMzMFkCamZmZmZkVQGZmZmZmZhRAzczMzMzMFkBmZmZmZmYUQJqZmZmZmRVAZmZmZmZmFEBmZmZmZmYSQGZmZmZmZhRAMzMzMzMzE0AAAAAAAAAUQAAAAAAAABRAzczMzMzMFEDNzMzMzMwUQM3MzMzMzBJAMzMzMzMzE0CamZmZmZkVQM3MzMzMzBRAAAAAAAAAFkCamZmZmZkTQAAAAAAAABRAAAAAAAAAFkCamZmZmZkTQJqZmZmZmRFAZmZmZmZmFEAAAAAAAAAUQAAAAAAAABJAmpmZmZmZEUAAAAAAAAAUQGZmZmZmZhRAMzMzMzMzE0BmZmZmZmYUQGZmZmZmZhJAMzMzMzMzFUAAAAAAAAAUQA==","dtype":"float64","shape":[50]},"target":["setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa","setosa"]},"selected":{"id":"37074","type":"Selection"},"selection_policy":{"id":"37103","type":"UnionRenderers"}},"id":"37073","type":"ColumnDataSource"},{"attributes":{"below":[{"id":"37045","type":"LinearAxis"}],"left":[{"id":"37050","type":"LinearAxis"}],"min_border_bottom":10,"min_border_left":10,"min_border_right":10,"min_border_top":10,"plot_height":300,"plot_width":700,"renderers":[{"id":"37045","type":"LinearAxis"},{"id":"37049","type":"Grid"},{"id":"37050","type":"LinearAxis"},{"id":"37054","type":"Grid"},{"id":"37064","type":"BoxAnnotation"},{"id":"37087","type":"Legend"},{"id":"37079","type":"GlyphRenderer"},{"id":"37095","type":"GlyphRenderer"},{"id":"37112","type":"GlyphRenderer"},{"id":"37087","type":"Legend"}],"right":[{"id":"37087","type":"Legend"}],"title":{"id":"37036","type":"Title"},"toolbar":{"id":"37060","type":"Toolbar"},"x_range":{"id":"37031","type":"Range1d"},"x_scale":{"id":"37041","type":"LinearScale"},"y_range":{"id":"37032","type":"Range1d"},"y_scale":{"id":"37043","type":"LinearScale"}},"id":"37037","subtype":"Figure","type":"Plot"},{"attributes":{"label":{"value":"setosa"},"renderers":[{"id":"37079","type":"GlyphRenderer"}]},"id":"37088","type":"LegendItem"},{"attributes":{},"id":"37055","type":"SaveTool"},{"attributes":{"callback":null,"data":{"petal length (cm)":{"__ndarray__":"zczMzMzMEkAAAAAAAAASQJqZmZmZmRNAAAAAAAAAEEBmZmZmZmYSQAAAAAAAABJAzczMzMzMEkBmZmZmZmYKQGZmZmZmZhJAMzMzMzMzD0AAAAAAAAAMQM3MzMzMzBBAAAAAAAAAEEDNzMzMzMwSQM3MzMzMzAxAmpmZmZmZEUAAAAAAAAASQGZmZmZmZhBAAAAAAAAAEkAzMzMzMzMPQDMzMzMzMxNAAAAAAAAAEECamZmZmZkTQM3MzMzMzBJAMzMzMzMzEUCamZmZmZkRQDMzMzMzMxNAAAAAAAAAFEAAAAAAAAASQAAAAAAAAAxAZmZmZmZmDkCamZmZmZkNQDMzMzMzMw9AZmZmZmZmFEAAAAAAAAASQAAAAAAAABJAzczMzMzMEkCamZmZmZkRQGZmZmZmZhBAAAAAAAAAEECamZmZmZkRQGZmZmZmZhJAAAAAAAAAEEBmZmZmZmYKQM3MzMzMzBBAzczMzMzMEEDNzMzMzMwQQDMzMzMzMxFAAAAAAAAACEBmZmZmZmYQQA==","dtype":"float64","shape":[50]},"petal_length_left_parenthesis_cm_right_parenthesis":{"__ndarray__":"zczMzMzMEkAAAAAAAAASQJqZmZmZmRNAAAAAAAAAEEBmZmZmZmYSQAAAAAAAABJAzczMzMzMEkBmZmZmZmYKQGZmZmZmZhJAMzMzMzMzD0AAAAAAAAAMQM3MzMzMzBBAAAAAAAAAEEDNzMzMzMwSQM3MzMzMzAxAmpmZmZmZEUAAAAAAAAASQGZmZmZmZhBAAAAAAAAAEkAzMzMzMzMPQDMzMzMzMxNAAAAAAAAAEECamZmZmZkTQM3MzMzMzBJAMzMzMzMzEUCamZmZmZkRQDMzMzMzMxNAAAAAAAAAFEAAAAAAAAASQAAAAAAAAAxAZmZmZmZmDkCamZmZmZkNQDMzMzMzMw9AZmZmZmZmFEAAAAAAAAASQAAAAAAAABJAzczMzMzMEkCamZmZmZkRQGZmZmZmZhBAAAAAAAAAEECamZmZmZkRQGZmZmZmZhJAAAAAAAAAEEBmZmZmZmYKQM3MzMzMzBBAzczMzMzMEEDNzMzMzMwQQDMzMzMzMxFAAAAAAAAACEBmZmZmZmYQQA==","dtype":"float64","shape":[50]},"sepal length (cm)":{"__ndarray__":"AAAAAAAAHECamZmZmZkZQJqZmZmZmRtAAAAAAAAAFkAAAAAAAAAaQM3MzMzMzBZAMzMzMzMzGUCamZmZmZkTQGZmZmZmZhpAzczMzMzMFEAAAAAAAAAUQJqZmZmZmRdAAAAAAAAAGEBmZmZmZmYYQGZmZmZmZhZAzczMzMzMGkBmZmZmZmYWQDMzMzMzMxdAzczMzMzMGEBmZmZmZmYWQJqZmZmZmRdAZmZmZmZmGEAzMzMzMzMZQGZmZmZmZhhAmpmZmZmZGUBmZmZmZmYaQDMzMzMzMxtAzczMzMzMGkAAAAAAAAAYQM3MzMzMzBZAAAAAAAAAFkAAAAAAAAAWQDMzMzMzMxdAAAAAAAAAGECamZmZmZkVQAAAAAAAABhAzczMzMzMGkAzMzMzMzMZQGZmZmZmZhZAAAAAAAAAFkAAAAAAAAAWQGZmZmZmZhhAMzMzMzMzF0AAAAAAAAAUQGZmZmZmZhZAzczMzMzMFkDNzMzMzMwWQM3MzMzMzBhAZmZmZmZmFEDNzMzMzMwWQA==","dtype":"float64","shape":[50]},"sepal_length_left_parenthesis_cm_right_parenthesis":{"__ndarray__":"AAAAAAAAHECamZmZmZkZQJqZmZmZmRtAAAAAAAAAFkAAAAAAAAAaQM3MzMzMzBZAMzMzMzMzGUCamZmZmZkTQGZmZmZmZhpAzczMzMzMFEAAAAAAAAAUQJqZmZmZmRdAAAAAAAAAGEBmZmZmZmYYQGZmZmZmZhZAzczMzMzMGkBmZmZmZmYWQDMzMzMzMxdAzczMzMzMGEBmZmZmZmYWQJqZmZmZmRdAZmZmZmZmGEAzMzMzMzMZQGZmZmZmZhhAmpmZmZmZGUBmZmZmZmYaQDMzMzMzMxtAzczMzMzMGkAAAAAAAAAYQM3MzMzMzBZAAAAAAAAAFkAAAAAAAAAWQDMzMzMzMxdAAAAAAAAAGECamZmZmZkVQAAAAAAAABhAzczMzMzMGkAzMzMzMzMZQGZmZmZmZhZAAAAAAAAAFkAAAAAAAAAWQGZmZmZmZhhAMzMzMzMzF0AAAAAAAAAUQGZmZmZmZhZAzczMzMzMFkDNzMzMzMwWQM3MzMzMzBhAZmZmZmZmFEDNzMzMzMwWQA==","dtype":"float64","shape":[50]},"target":["versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor","versicolor"]},"selected":{"id":"37090","type":"Selection"},"selection_policy":{"id":"37122","type":"UnionRenderers"}},"id":"37089","type":"ColumnDataSource"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.5},"line_color":{"value":"#1f77b4"},"size":{"units":"screen","value":5.477225575051661},"x":{"field":"sepal length (cm)"},"y":{"field":"petal length (cm)"}},"id":"37077","type":"Scatter"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#ff7f0e"},"line_alpha":{"value":0.5},"line_color":{"value":"#ff7f0e"},"size":{"units":"screen","value":5.477225575051661},"x":{"field":"sepal length (cm)"},"y":{"field":"petal length (cm)"}},"id":"37092","type":"Scatter"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#2ca02c"},"line_alpha":{"value":0.5},"line_color":{"value":"#2ca02c"},"size":{"units":"screen","value":5.477225575051661},"x":{"field":"sepal length (cm)"},"y":{"field":"petal length (cm)"}},"id":"37110","type":"Scatter"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"37064","type":"BoxAnnotation"},{"attributes":{},"id":"37074","type":"Selection"},{"attributes":{"dimension":1,"grid_line_color":{"value":null},"plot":{"id":"37037","subtype":"Figure","type":"Plot"},"ticker":{"id":"37051","type":"BasicTicker"}},"id":"37054","type":"Grid"},{"attributes":{},"id":"37059","type":"ResetTool"},{"attributes":{},"id":"37046","type":"BasicTicker"},{"attributes":{},"id":"37051","type":"BasicTicker"},{"attributes":{"fill_alpha":{"value":0.5},"fill_color":{"value":"#2ca02c"},"line_alpha":{"value":0.5},"line_color":{"value":"#2ca02c"},"size":{"units":"screen","value":5.477225575051661},"x":{"field":"sepal length (cm)"},"y":{"field":"petal length (cm)"}},"id":"37109","type":"Scatter"}],"root_ids":["37037"]},"title":"Bokeh Application","version":"1.0.4"}}';
                  var render_items = [{"docid":"002bbc04-3e66-433a-9e48-d89bd4fa78c8","roots":{"37037":"410280c0-48c7-445f-9e4c-001a2b350d06"}}];
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