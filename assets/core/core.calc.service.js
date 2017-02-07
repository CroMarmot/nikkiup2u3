(function () {
  'use strict';

  angular
    .module('nikki.core')
    .service('CalcService', CalcService);
  
  //CalcService.$inject = [];

  function CalcService() {
    var ifBonusScore = function(clothes,bonus,scoring,weight){
      var cnt = 0;
      _.forEach(bonus,function(o){
        if(_.includes(clothes[14],o.tag) || _.includes(clothes[0],o.tag)){
          cnt += o.weight * scoring[clothes[1].split("-")[0]][o.base] * _.sumBy(weight,function(w){return Math.abs(w);});
        }
      });
      return cnt;
    }
    this.CalcScoring = function(clothes,bonus,scoring,weight){
      var cnt = 0;
      for(var i = 0 ; i < 5 ; i++ ){
        if(!_.isEmpty(clothes[4+2*i]) && weight[i] > 0){
          cnt += Math.abs( scoring[clothes[1].split("-")[0]][clothes[4+2*i]] * weight[i] );
        }else if(!_.isEmpty(clothes[5+2*i]) && weight[i] < 0){
          cnt += Math.abs( scoring[clothes[1].split("-")[0]][clothes[5+2*i]] * weight[i] );
        }
      }
      cnt += ifBonusScore(clothes,bonus,scoring,weight);
      return Math.floor(cnt);

    };
  }
})();
