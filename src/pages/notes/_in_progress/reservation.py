import schedule
import datetime
import time
import request


def job():
    f = open("/Users/itaiaxelrad/Documents/GitHub/itaiaxelrad/output.txt", "a")
    f.write("Now the file has more content!")
    f.close()
    print("I'm working...")
    return


# schedule.every().day.at("13:08").do(job, 'It is 01:00')

# schedule.every(0.10).minutes.do(job)
# while True:
#     schedule.run_pending()
#     time.sleep(30)  # wait 30 seconds
