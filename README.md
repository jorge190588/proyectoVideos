# Ranking de Videos
Un sistema de votación de videos el cual clasifica los videos subidos por los usuarios registrados.

## Instalar Dependencias
```
npm install
```

## Iniciar
```
npm start
```

## Tecnologías Usadas
* [Express](http://expressjs.com/)
* [NodeJS](https://nodejs.org/api/)
* [MySQL](https://www.npmjs.com/package/mysql)
* [Bootstrap 3](http://getbootstrap.com/)
* [Pug](https://www.npmjs.com/package/pug)

## Herramientas Utilizadas
* [Visual Studio Code](https://code.visualstudio.com/)
* [Nodemon](https://www.npmjs.com/package/nodemon)
* [Mysql Workbench](http://www.mediafire.com/file/ilhktyaidy0a2i3/MySQL+Workbench+5.2.47+Portable.by.kenet9911.rar)
* [Mysql young](https://www.youtube.com/watch?v=CcgpekWeI6E)
* [Alpine con Nodejs](https://github.com/nodejs/docker-node/blob/45fa3ebe94598758b9c9e4a382236fc7e879e2e6/10/slim/Dockerfile)


## Errores
 
### Raw-mode is unavailable courtesy of Hyper-V. (VERR_SUPDRV_NO_RAW_MODE_HYPER_V_ROOT)
 
* Desactivar hyper-v en panel de control, Sistema y seguridad, Programas, activar o desactivar las caracteristicas de windows
* Ejecutar en cmd "Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Hyper-V -All" y "bcdedit /set hypervisorlaunchtype off"

Referencias: [link1](https://discuss.erpnext.com/t/virtualbox-wont-run-raw-mode-unavailable-courtesy-of-hyper-v/34541/20),[link2](https://stackoverflow.com/questions/50053255/virtualbox-raw-mode-is-unavailable-courtesy-of-hyper-v-windows-10)

### Docker on Windows (Boot2Docker) - certificate signed by unknown authority error

* Descargar el certificado(solo si es necesario)
1. En la ventana de Ejecutar escribir mmc y hacer clic en aceptar o enter
2. Menú "Archivo" opcion "Agregar o quitar complemento"
3. En el listado "Complemento disponible" seleccionar "Certificados",hacer clic en el boton "Agregar" y hacer clic en el boton "Aceptar"
4. En la consola hacer doble clic en Certificados: usuario actual", hacer doble clic en "Entidades de certificados raiz de confianza" y hacer doble clic en "Certificados" 
5. Abrir el certificado (su certificado), hacer clic en la pestaña "Detalles" y exportar el archivo con extension "cer"

* Generar el certificado con extension PEM con la sentencia "openssl x509 -inform der -in certificate.cer -out certificate.pem" en una consola o en Docker Quickstart Terminal

* Entrar a la maquina virtual con la sentencia "docker-machine ssh default" y ejecutar los comandos siguientes:
1. sudo -s
2. /home/docker# mkdir /var/lib/boot2docker/certs
3. /home/docker# cp /c/Users/my.username/certs/*.pem /var/lib/boot2docker/certs/

* Copiar los certificados, ejecutar las sentencias siguientes:
1. touch /var/lib/boot2docker/bootlocal.sh && chmod +x /var/lib/boot2docker/bootlocal.sh
2. vi /var/lib/boot2docker/bootlocal.sh, insertar el texto 
```
#!/bin/sh
mkdir -p /etc/docker/certs.d && cp certs/certificate.pem /etc/docker/certs.d
```
* Salir de la consola
* Reiniciar la maquina virtual con la sentencia "docker-machine restart defaul"

Referencia: [stackoverflow](https://stackoverflow.com/questions/31205438/docker-on-windows-boot2docker-certificate-signed-by-unknown-authority-error)


* [nodejs "npm ERR! code SELF_SIGNED_CERT_IN_CHAIN"](https://stackoverflow.com/questions/29141153/nodejs-npm-err-code-self-signed-cert-in-chain)