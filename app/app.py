from flask import Flask, render_template, jsonify
from random import sample

app = Flask(__name__)
@app.route('/<path:path>')
def static_file(path):
    return app.send_static_file(path)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/data')
def data():
    return jsonify({'titlejson' : 'ITS WORKING!!!!', 'currentSpeedjson' : sample(range(1,10), 1), 'sessionDistance': '2', 'timeLeftjson' : '1.23', 'SessionDuration': '2','rotationsperminute': '312', 'DistaceTotal': '23', 'TimeTotal': '13', 'DistaceTraveled': '1 mile', 'AverageSpeed': '15', 'InternetLeft': '21', 'bitsUsing' : '1234', 'bitsMaking' : '42', 'ranking' : 'winning', 'nextranking' : 'maybe winning', 'session': '5', 'AverageInternet': '23'})

if __name__ == '__main__':
    app.run()
