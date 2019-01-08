chmod -R 777 *
rm -r templates.zip
zip -r build/templates.zip templates
echo "templates comprimidas"
echo "--------------------------------------------------------"
zip -r build/css.zip css
chmod -R 777 *
echo "estilos comprimidos"