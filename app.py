from flask import Flask
app = Flask(__name__)


@app.route('/data')
def hello():
    
  #  return render_template('script.js', data = data) 
    #return "Hello World!"
    
    return ('{"name":"John", "age":31, "city":"New York"}')

if __name__ == '__main__':
    app.run()
