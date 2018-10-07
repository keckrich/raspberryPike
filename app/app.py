from flask import Flask, render_template, jsonify
from random import sample
from random import randint
i = 0 

app = Flask(__name__)
@app.route('/<path:path>')
def static_file(path):
    return app.send_static_file(path)

@app.route('/')
def index():
    return render_template('index.html')

	
@app.route('/data')
def data():
	global i
	i += 1
	x = randint(5, 10)

	return jsonify({'titlejson' : 'rasberry Pike', 'currentSpeedjson' : str(x), 'sessionDistance': str(i), 'timeLeftjson' : '1.23', 'SessionDuration': str(i),'rotationsperminute': '312', 'DistaceTotal': str(i * .23), 'TimeTotal': '13', 'DistaceTraveled' : '1 mile', 'AverageSpeed': '15', 'InternetLeft': '21', 'bitsUsing' : '1234', 'bitsMaking' : '42', 'ranking' : 'winning', 'nextranking' : 'maybe winning', 'session': '5', 'AverageInternet': '23'})

if __name__ == '__main__':
    app.run()