'''from flask import Flask, render_template, jsonify
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
    return jsonify({'titlejson' : 'rasberry Pike', 'currentSpeedjson' : sample(range(1,10), 1), 'sessionDistance': '2', 'timeLeftjson' : '1.23', 'SessionDuration': '2','rotationsperminute': '312', 'DistaceTotal': '23', 'TimeTotal': '13', 'DistaceTraveled' : '1 mile', 'AverageSpeed': '15', 'InternetLeft': '21', 'bitsUsing' : '1234', 'bitsMaking' : '42', 'ranking' : 'winning', 'nextranking' : 'maybe winning', 'session': '5', 'AverageInternet': '23'})

if __name__ == '__main__':
    app.run()'''

import time
from flask import Flask, render_template, jsonify
from multiprocessing import Process, Value
import RPi.GPIO as gpio
import threading

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
	rpm =  i/16.77
	mph = i = 4.65
	i = 0
	return jsonify({'titlejson' : 'ITS WORKING!!!!', 'currentSpeedjson' : mph, 'sessionDistance': '2', 'timeLeftjson' : '1.23', 'SessionDuration': '2','rotationsperminute': '312', 'DistaceTotal': '23', 'TimeTotal': '13', 'DistaceTraveled': '1 mile', 'AverageSpeed': '15', 'InternetLeft': '21', 'bitsUsing' : '1234', 'bitsMaking' : '42', 'ranking' : 'winning', 'nextranking' : 'maybe winning', 'session': '5', 'AverageInternet': '23'})

	
	
def record_loop(loop_on):
	

	gpio.setmode(gpio.BCM)
	gpio.setup(18, gpio.IN, pull_up_down=gpio.PUD_DOWN)

	gpio.add_event_detect(18, gpio.RISING)
	def my_callback(channel):
		global i
		i +=1
		#print (i)

	'''
	def sec_timer():
		global i
		print (i/16.77)
		i = 0
		t = threading.Timer(1.0, sec_timer)
		t.start()

	sec_timer()
	'''
	gpio.add_event_callback(18, my_callback)
	
if __name__ == "__main__":
	recording_on = Value('b', True)
	p = Process(target=record_loop, args=(recording_on,))
	p.start()  
	app.run(debug=False, use_reloader=False)
	p.join()
