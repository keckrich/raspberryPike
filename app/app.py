from flask import Flask, render_template, jsonify

app = Flask(__name__)
@app.route('/<path:path>')
def static_file(path):
    return app.send_static_file(path)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/data')
def data():
    return jsonify({'titlejson' : 'ITS WORKING!!!!', 'currentSpeedjson' : '12.3', 'timeLeftjson' : '1.23'})

if __name__ == '__main__':
    app.run()
