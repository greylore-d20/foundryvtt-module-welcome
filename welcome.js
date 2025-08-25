
Hooks.on("ready", function() {
    console.log('welcome module ready')
}
);
class WelcomeScene {

    
    constructor() {;};
      
    static GetGarrisonSceneName(pc) {
        const DS = 'welcome1'
        //if (!(pc instanceof game.actor)) throw new Error('Argument must be an Actor object.');
        if (!pc) return DS;
        var sceneName = DS;
        if (pc.name == 'PC1') {
            sceneName = 'Bastion1';
        } else if (pc.name == 'PC2') {
            sceneName = 'Bastion2';
        }
        console.log(sceneName);
        
        return sceneName;
        // game.socket.emit("pullToScene", scene, players[p].value);

    }
    

}