Afin de recréer la database : 

-npm install;

-créez la database dans mysql : apply_project_dev;

-créez un fichier app-env (le nom est important pour le .gitignore) à la racine du projet;

-Dans ce fichier créez une variable  export SQL="password" sans  espaces et ou password est le mot de passe de votre serveur sql;

-Tapez source app-env dans le terminal, il sera peut être nécessaire de redémarrer la session;

-Lancez la commande npx sequelize-cli db:migrate dans le terminal;
