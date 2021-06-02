from flask import Flask,render_template , url_for, redirect

#Probando mi nuevo usuario
app = Flask(__name__)

@app.route('/<pagename>')
def index(pagename):
  if pagename == 'inicio':
    pagina = 'index.html'
  elif pagename == 'catalogo':
    pagina = 'catalogo.html'
  else:
    return redirect('/inicio')
  return render_template(pagina)



if __name__ == "__main__":
  app.run(host="0.0.0.0",port="8080",debug=True)
