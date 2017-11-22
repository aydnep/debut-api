/**
 * backend
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: unset
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Backend);
  }
}(this, function(expect, Backend) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Backend.VersionApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('VersionApi', function() {
    describe('versionCount', function() {
      it('should call versionCount successfully', function(done) {
        //uncomment below and update the code to test versionCount
        //instance.versionCount(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('versionCreate', function() {
      it('should call versionCreate successfully', function(done) {
        //uncomment below and update the code to test versionCreate
        //instance.versionCreate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('versionCreateChangeStreamGetVersionsChangeStream', function() {
      it('should call versionCreateChangeStreamGetVersionsChangeStream successfully', function(done) {
        //uncomment below and update the code to test versionCreateChangeStreamGetVersionsChangeStream
        //instance.versionCreateChangeStreamGetVersionsChangeStream(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('versionCreateChangeStreamPostVersionsChangeStream', function() {
      it('should call versionCreateChangeStreamPostVersionsChangeStream successfully', function(done) {
        //uncomment below and update the code to test versionCreateChangeStreamPostVersionsChangeStream
        //instance.versionCreateChangeStreamPostVersionsChangeStream(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('versionDeleteById', function() {
      it('should call versionDeleteById successfully', function(done) {
        //uncomment below and update the code to test versionDeleteById
        //instance.versionDeleteById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('versionExistsGetVersionsidExists', function() {
      it('should call versionExistsGetVersionsidExists successfully', function(done) {
        //uncomment below and update the code to test versionExistsGetVersionsidExists
        //instance.versionExistsGetVersionsidExists(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('versionExistsHeadVersionsid', function() {
      it('should call versionExistsHeadVersionsid successfully', function(done) {
        //uncomment below and update the code to test versionExistsHeadVersionsid
        //instance.versionExistsHeadVersionsid(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('versionFind', function() {
      it('should call versionFind successfully', function(done) {
        //uncomment below and update the code to test versionFind
        //instance.versionFind(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('versionFindById', function() {
      it('should call versionFindById successfully', function(done) {
        //uncomment below and update the code to test versionFindById
        //instance.versionFindById(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('versionFindOne', function() {
      it('should call versionFindOne successfully', function(done) {
        //uncomment below and update the code to test versionFindOne
        //instance.versionFindOne(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('versionPatchOrCreate', function() {
      it('should call versionPatchOrCreate successfully', function(done) {
        //uncomment below and update the code to test versionPatchOrCreate
        //instance.versionPatchOrCreate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('versionPrototypeGetArticle', function() {
      it('should call versionPrototypeGetArticle successfully', function(done) {
        //uncomment below and update the code to test versionPrototypeGetArticle
        //instance.versionPrototypeGetArticle(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('versionPrototypePatchAttributes', function() {
      it('should call versionPrototypePatchAttributes successfully', function(done) {
        //uncomment below and update the code to test versionPrototypePatchAttributes
        //instance.versionPrototypePatchAttributes(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('versionReplaceByIdPostVersionsidReplace', function() {
      it('should call versionReplaceByIdPostVersionsidReplace successfully', function(done) {
        //uncomment below and update the code to test versionReplaceByIdPostVersionsidReplace
        //instance.versionReplaceByIdPostVersionsidReplace(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('versionReplaceByIdPutVersionsid', function() {
      it('should call versionReplaceByIdPutVersionsid successfully', function(done) {
        //uncomment below and update the code to test versionReplaceByIdPutVersionsid
        //instance.versionReplaceByIdPutVersionsid(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('versionReplaceOrCreatePostVersionsReplaceOrCreate', function() {
      it('should call versionReplaceOrCreatePostVersionsReplaceOrCreate successfully', function(done) {
        //uncomment below and update the code to test versionReplaceOrCreatePostVersionsReplaceOrCreate
        //instance.versionReplaceOrCreatePostVersionsReplaceOrCreate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('versionReplaceOrCreatePutVersions', function() {
      it('should call versionReplaceOrCreatePutVersions successfully', function(done) {
        //uncomment below and update the code to test versionReplaceOrCreatePutVersions
        //instance.versionReplaceOrCreatePutVersions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('versionUpdateAll', function() {
      it('should call versionUpdateAll successfully', function(done) {
        //uncomment below and update the code to test versionUpdateAll
        //instance.versionUpdateAll(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('versionUpsertWithWhere', function() {
      it('should call versionUpsertWithWhere successfully', function(done) {
        //uncomment below and update the code to test versionUpsertWithWhere
        //instance.versionUpsertWithWhere(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
