import time
from flask import Flask, render_template, jsonify
from multiprocessing import Process, Value
import RPi.GPIO as gpio
import threading

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

	
	
def record_loop(loop_on):
	i = 0

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
	app.run(debug=True, use_reloader=False)
	p.join()