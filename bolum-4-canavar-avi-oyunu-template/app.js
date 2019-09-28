new Vue({
    el : "#app",
    data : {
        player_heal  : 100,
        monster_heal : 100,
        game_is_on : false,
        logs : [ ]
    },
    methods : {
        start_game : function(){

            this.game_is_on=true
        },
        attack : function(){
            var point = Math.ceil(Math.random() *10);
            this.monster_heal-=point;
            this.add_to_log({turn : "p", text : "player atack ("+point+") "})
            this.monster_atack();
        },
        special_atack : function(){
            var point = Math.ceil(Math.random() * 25);
            this.monster_heal-=point;
            this.add_to_log({turn : "p", text : "player special atack ("+point+") "})
            this.monster_atack();
        },
        heal_up : function(){
            var heal_point =Math.ceil(Math.random() * 25);
            this.add_to_log({turn : "p", text : "player heal up ("+heal_point+") "})
            this.player_heal+=heal_point;
        },
        give_up : function(){
            this.player_heal = 0

        },
        monster_atack : function(){
            var monsterAtack =Math.ceil(Math.random() * 15);
            this.player_heal-= monsterAtack;
            this.add_to_log({turn : "m", text : "Monster atack ("+monsterAtack+") "})

        },
        add_to_log : function(log){
            this.logs.push(log);
        }
    },
    watch : {
        player_heal : function(value){
            if(value <= 0){
                this.player_heal = 0;
               if(confirm("Oyunu Kaybettin Tekrar denemek ister misin?")){
                this.player_heal = 100;
                this.monster_heal = 100;
                this.logs= []
               }
            }else if(value >= 100){
                this.player_heal = 100;
            }
        },
        monster_heal : function(value){
            if(value <= 0){
                this.monster_heal = 0;
                if(confirm("Oyunu Kazandın Tekrar denemek ister misin?")){
                    this.player_heal = 100;
                    this.monster_heal = 100;
                    this.logs= []
                   }
            }else if(value >= 100 ){
                this.monster_heal = 100;
            }
        }
    },
    computed : {
        player_progress :function(){
            return {
                width : this.player_heal + "%"
            }
        },
        monster_progress :function(){
            return {
                width : this.monster_heal + "%"
            }
        }
    }
});