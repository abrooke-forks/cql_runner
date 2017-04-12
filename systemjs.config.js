(function (global) {
  System.config({
    paths: {
      'npm:': 'node_modules/'
    },
    map: {
        app: 'app',
        css: 'npm:systemjs-plugin-css',
        // --- Angular bundles
        '@angular/core':
          'npm:@angular/core/bundles/core.umd.js',
        '@angular/common':
          'npm:@angular/common/bundles/common.umd.js',
        '@angular/compiler':
          'npm:@angular/compiler/bundles/compiler.umd.js',
        '@angular/platform-browser':
          'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
        '@angular/platform-browser-dynamic':
          'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
        '@angular/http':
          'npm:@angular/http/bundles/http.umd.js',
        '@angular/router':
          'npm:@angular/router/bundles/router.umd.js',
        '@angular/forms':
          'npm:@angular/forms/bundles/forms.umd.js',
        // --- Other libraries
        'rxjs': 'npm:rxjs',
        '@ng-bootstrap/ng-bootstrap': 'npm:@ng-bootstrap/ng-bootstrap/bundles/ng-bootstrap.js',
        'jquery': 'npm:jquery/dist',
        'codemirror': 'npm:codemirror/lib',
        'matchbrackets': 'npm:codemirror/addon/edit',
        'closebrackets': 'npm:codemirror/addon/edit',
        'activeline': 'npm:codemirror/addon/selection',
        'rulers': 'npm:codemirror/addon/display',
        'simple': 'npm:codemirror/addon/mode'
    },
    packages: {
        app: {
          main: './main.js',
          defaultExtension: 'js'
        },
        css: {
          main: 'css.js', defaultExtension: 'js'
        },
        jquery: {
            main: 'jquery.js', defaultExtension: 'js'
        },
        codemirror: {
            main: 'codemirror.js', defaultExtension: 'js'
        },
        matchbrackets: {
            main: 'matchbrackets.js', defaultExtension: 'js'
        },
        closebrackets: {
            main: 'closebrackets.js', defaultExtension: 'js'
        },
        activeline: {
            main: 'active-line.js', defaultExtension: 'js'
        },
        rulers: {
            main: 'rulers.js', defaultExtension: 'js'
        },
        simple: {
            main: 'simple.js', defaultExtension: 'js'
        },
        rxjs: {
            main: 'Rx.js', defaultExtension: 'js'
        }
    }

  });
})(this);
