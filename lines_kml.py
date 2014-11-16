import csv
import simplekml

def between(x,a,b):
        if x>a:
                if x<b:
                        return True
        return False

def generateLists():
	crime_list = []
        print 'hi'
        lat_list = []
        long_list = []
	with open('dc_crime.csv','r') as infile:
		inreader = csv.reader(infile,delimiter=",")
		for row in inreader:
			crime_list.append(row[4])
                        lat_list.append(row[10])
                        long_list.append(row[9])
        print 'hl'
        print lat_list
        for x in range(len(crime_list)-1):
                xval = float(lat_list[x+1])
                yval = float(long_list[x+1])
                if between(xval,-79,-75) and between(yval,36,40):
						new_crime_list.append(crime_list[x+1])
						new_lat_list.append(lat_list[x+1])
						new_long_list.append(long_list[x+1])
		return new_lat_list,new_long_list

def main():
	new_lat_list,new_long_list = generateLists()
	kml = simplekml.Kml()
    kml.newpoint(name=crime_list[x+1], coords=[(lat_list[x+1],long_list[x+1])])
    kml.save('lines.kml')
main()
