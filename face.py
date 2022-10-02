#importing library
import cv2
import os
import webbrowser
from All_Functions import *
#using haarcascade model doing face detection
model_har = cv2.CascadeClassifier('haarcascade_frontalface_default.xml')
#loading model for Shrishti face
Shrishti_model = cv2.face_LBPHFaceRecognizer.create()
Shrishti_model.read('./Shrishti_model.h5')

def cropface(img):
    
    # Convert image to grayscale
    gray = cv2.cvtColor(img,cv2.COLOR_BGR2GRAY)
    faces = model_har.detectMultiScale(gray, 1.3, 5)
    if faces is ():
        return img
     
    for (x,y,w,h) in faces:
        cv2.rectangle(img,(x,y),(x+w,y+h),(0,355,355),2)
        cropped = img[y:y+h, x:x+w]
    return cropped
#capturing Shrishti face
cap = cv2.VideoCapture(0)
ret, myframe = cap.read()

#cropping image
myface_cropimage = cropface(myframe)

#change color of image to gray color 
myface_cropimage = cv2.cvtColor(myface_cropimage,cv2.COLOR_BGR2GRAY)

#resizing the image
myface_cropimage = cv2.resize(myface_cropimage,(200,200))

#showing my image
# cv2.imshow("my crop photo",myface_cropimage)
# cv2.waitKey(10)
# cv2.destroyAllWindows()

#myface stroing into file
# cv2.imwrite("Shrishti_photo.jpg",myface_cropimage)
data = os.listdir('./Images/Anonymous/')

file = data[-1]
filedata = file[-6:-4]
num = int(filedata)
num = num + 1
finalnum = "0"+str(num)

file_path = "./Images/Anonymous/photo"+finalnum+".jpg"
cv2.imwrite(file_path,myface_cropimage )

#release camera
cap.release()

# predicting the result of Shrishti face
Shrishti_myface = Shrishti_model.predict(myface_cropimage)

#printing prediction result value for my face
#print("Result value for my face : " , Shrishti_myface)

#confidence value for my face
Shrishti_confidence = int( 100 * (1 - (Shrishti_myface[1])/400) )
#print("Confidence value for my face : " , Shrishti_confidence)

if Shrishti_confidence >= 81:
    print("face successfully matched")
    os.remove(file_path)
    # webbrowser.open("http://192.168.29.119/docker_automation.html/")

else:
    print("face not found aman")
    raise Exception('spam', 'eggs')
