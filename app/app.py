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
	y = randint(1,100)

	return jsonify({'titlejson' : 'rasberry Pike', 'currentSpeedjson' : str(x), 'sessionDistance': str(i), 'timeLeftjson' : '1.23', 'SessionDuration': str(i),'rotationsperminute': str(x*8.34), 'DistaceTotal': str(i * 23/y), 'TimeTotal': '13', 'DistaceTraveled' : '1 mile', 'AverageSpeed': '15', 'InternetLeft': str(1000-i), 'bitsUsing' : '1234', 'bitsMaking' : '42', 'ranking' : 'winning', 'nextranking' : 'maybe winning', 'session': '5', 'AverageInternet': '23'})

if __name__ == '__main__':
    app.run()