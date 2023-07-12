#Importamos Flask y sus dependencias
from flask import Flask, render_template
from datetime import datetime

app = Flask(__name__)

#Esto nos permite tener la fecha actual sin necesidad de cambiarla manualmente
@app.context_processor
def inject_now():
    return {'now': datetime.utcnow()}

#Le indicamos a Flask cual será la ruta en la que se encuentra nuestro index.html
@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/grid')
def grid():
    return render_template('grid.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

#Esto nos permite ejecutar en modo debug el servidor de Flask mediante el comando "python app.py" 
if __name__ == '__main__':
    app.run(debug=True, port=5000)