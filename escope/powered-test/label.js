(function() {
  var escope, esprima, expect, harmony;

  expect = require('chai').expect;

  esprima = require('esprima');

  harmony = require('../third_party/esprima');

  escope = require('..');

  describe('label', function() {
    it('should not create variables', function() {
      var ast, globalScope, scope, scopeManager;
      ast = esprima.parse("function bar() { q: for(;;) { break q; } }");
      scopeManager = escope.analyze(ast);
      expect(scopeManager.scopes).to.have.length(2);
      globalScope = scopeManager.scopes[0];
      expect(globalScope.type).to.be.equal('global');
      expect(globalScope.variables).to.have.length(1);
      expect(globalScope.variables[0].name).to.be.equal('bar');
      expect(globalScope.references).to.have.length(0);
      scope = scopeManager.scopes[1];
      expect(scope.type).to.be.equal('function');
      expect(scope.variables).to.have.length(1);
      expect(scope.variables[0].name).to.be.equal('arguments');
      expect(scope.isArgumentsMaterialized()).to.be["false"];
      return expect(scope.references).to.have.length(0);
    });
    return it('should count child node references', function() {
      var ast, globalScope, scopeManager;
      ast = esprima.parse("var foo = 5;\n\nlabel: while (true) {\n  console.log(foo);\n  break;\n}");
      scopeManager = escope.analyze(ast);
      expect(scopeManager.scopes).to.have.length(1);
      globalScope = scopeManager.scopes[0];
      expect(globalScope.type).to.be.equal('global');
      expect(globalScope.variables).to.have.length(1);
      expect(globalScope.variables[0].name).to.be.equal('foo');
      expect(globalScope.through.length).to.be.equal(3);
      expect(globalScope.through[2].identifier.name).to.be.equal('foo');
      return expect(globalScope.through[2].isRead()).to.be["true"];
    });
  });

}).call(this);

//# sourceMappingURL=data:application/json;base64,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LSotIGNvZGluZzogdXRmLTggLSotXG4jICBDb3B5cmlnaHQgKEMpIDIwMTUgWXVzdWtlIFN1enVraSA8dXRhdGFuZS50ZWFAZ21haWwuY29tPlxuI1xuIyAgUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0XG4jICBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcbiNcbiMgICAgKiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodFxuIyAgICAgIG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cbiMgICAgKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodFxuIyAgICAgIG5vdGljZSwgdGhpcyBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lciBpbiB0aGVcbiMgICAgICBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGUgZGlzdHJpYnV0aW9uLlxuI1xuIyAgVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBcIkFTIElTXCJcbiMgIEFORCBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEVcbiMgIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFXG4jICBBUkUgRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgPENPUFlSSUdIVCBIT0xERVI+IEJFIExJQUJMRSBGT1IgQU5ZXG4jICBESVJFQ1QsIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFU1xuIyAgKElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTO1xuIyAgTE9TUyBPRiBVU0UsIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EXG4jICBPTiBBTlkgVEhFT1JZIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVFxuIyAgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GXG4jICBUSElTIFNPRlRXQVJFLCBFVkVOIElGIEFEVklTRUQgT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuXG5leHBlY3QgPSByZXF1aXJlKCdjaGFpJykuZXhwZWN0XG5lc3ByaW1hID0gcmVxdWlyZSAnZXNwcmltYSdcbmhhcm1vbnkgPSByZXF1aXJlICcuLi90aGlyZF9wYXJ0eS9lc3ByaW1hJ1xuZXNjb3BlID0gcmVxdWlyZSAnLi4nXG5cbmRlc2NyaWJlICdsYWJlbCcsIC0+XG4gICAgaXQgJ3Nob3VsZCBub3QgY3JlYXRlIHZhcmlhYmxlcycsIC0+XG4gICAgICAgIGFzdCA9IGVzcHJpbWEucGFyc2UgXCJcIlwiXG4gICAgICAgIGZ1bmN0aW9uIGJhcigpIHsgcTogZm9yKDs7KSB7IGJyZWFrIHE7IH0gfVxuICAgICAgICBcIlwiXCJcblxuICAgICAgICBzY29wZU1hbmFnZXIgPSBlc2NvcGUuYW5hbHl6ZSBhc3RcbiAgICAgICAgZXhwZWN0KHNjb3BlTWFuYWdlci5zY29wZXMpLnRvLmhhdmUubGVuZ3RoIDJcbiAgICAgICAgZ2xvYmFsU2NvcGUgPSBzY29wZU1hbmFnZXIuc2NvcGVzWzBdXG4gICAgICAgIGV4cGVjdChnbG9iYWxTY29wZS50eXBlKS50by5iZS5lcXVhbCAnZ2xvYmFsJ1xuICAgICAgICBleHBlY3QoZ2xvYmFsU2NvcGUudmFyaWFibGVzKS50by5oYXZlLmxlbmd0aCAxXG4gICAgICAgIGV4cGVjdChnbG9iYWxTY29wZS52YXJpYWJsZXNbMF0ubmFtZSkudG8uYmUuZXF1YWwgJ2JhcidcbiAgICAgICAgZXhwZWN0KGdsb2JhbFNjb3BlLnJlZmVyZW5jZXMpLnRvLmhhdmUubGVuZ3RoIDBcblxuICAgICAgICBzY29wZSA9IHNjb3BlTWFuYWdlci5zY29wZXNbMV1cbiAgICAgICAgZXhwZWN0KHNjb3BlLnR5cGUpLnRvLmJlLmVxdWFsICdmdW5jdGlvbidcbiAgICAgICAgZXhwZWN0KHNjb3BlLnZhcmlhYmxlcykudG8uaGF2ZS5sZW5ndGggMVxuICAgICAgICBleHBlY3Qoc2NvcGUudmFyaWFibGVzWzBdLm5hbWUpLnRvLmJlLmVxdWFsICdhcmd1bWVudHMnXG4gICAgICAgIGV4cGVjdChzY29wZS5pc0FyZ3VtZW50c01hdGVyaWFsaXplZCgpKS50by5iZS5mYWxzZVxuICAgICAgICBleHBlY3Qoc2NvcGUucmVmZXJlbmNlcykudG8uaGF2ZS5sZW5ndGggMFxuXG4gICAgaXQgJ3Nob3VsZCBjb3VudCBjaGlsZCBub2RlIHJlZmVyZW5jZXMnLCAtPlxuICAgICAgICAgICAgYXN0ID0gZXNwcmltYS5wYXJzZSBcIlwiXCJcbiAgICAgICAgICAgIHZhciBmb28gPSA1O1xuXG4gICAgICAgICAgICBsYWJlbDogd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZm9vKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcIlwiXCJcblxuICAgICAgICAgICAgc2NvcGVNYW5hZ2VyID0gZXNjb3BlLmFuYWx5emUgYXN0XG4gICAgICAgICAgICBleHBlY3Qoc2NvcGVNYW5hZ2VyLnNjb3BlcykudG8uaGF2ZS5sZW5ndGggMVxuICAgICAgICAgICAgZ2xvYmFsU2NvcGUgPSBzY29wZU1hbmFnZXIuc2NvcGVzWzBdXG4gICAgICAgICAgICBleHBlY3QoZ2xvYmFsU2NvcGUudHlwZSkudG8uYmUuZXF1YWwgJ2dsb2JhbCdcbiAgICAgICAgICAgIGV4cGVjdChnbG9iYWxTY29wZS52YXJpYWJsZXMpLnRvLmhhdmUubGVuZ3RoIDFcbiAgICAgICAgICAgIGV4cGVjdChnbG9iYWxTY29wZS52YXJpYWJsZXNbMF0ubmFtZSkudG8uYmUuZXF1YWwgJ2ZvbydcbiAgICAgICAgICAgIGV4cGVjdChnbG9iYWxTY29wZS50aHJvdWdoLmxlbmd0aCkudG8uYmUuZXF1YWwgM1xuICAgICAgICAgICAgZXhwZWN0KGdsb2JhbFNjb3BlLnRocm91Z2hbMl0uaWRlbnRpZmllci5uYW1lKS50by5iZS5lcXVhbCAnZm9vJ1xuICAgICAgICAgICAgZXhwZWN0KGdsb2JhbFNjb3BlLnRocm91Z2hbMl0uaXNSZWFkKCkpLnRvLmJlLnRydWVcblxuIyB2aW06IHNldCBzdz00IHRzPTQgZXQgdHc9ODAgOlxuIl19