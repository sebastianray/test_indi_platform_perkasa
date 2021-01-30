# TEST TAHAP 2 PROGRAMMING PT. INDI PLATFORM RAKSASA

Test ini adalah API yang memuat 550.000 data Student yang dibuat tech-stack yang digunakan dalam proyek ini :
+ NodeJS
+ Framework ExpressJS
+ MongoDB
+ Mongoose ORM
+ Faker

## START

Install node modules :

    npm install

Seeding data Students :

    npm run seed

Jalankan server :

    npm run start

Buka browser/postman di laman http://localhost:3000/api/v1/index

Hasil test postman runner endpoints secara paralel ada pada file Student.postman_test_run.json

### Endpoints

+   GET Find Student by Id
    http://localhost:3000/api/v1/students/:id

    req.params:
    {
    "id": "60147ca2cdd50d2b10edb5b1",
    }

    res:
    200:  
        {
            "success": true,
            "message": "Success finding student!",
            "found": {
                "firstname": "Rodrick",
                "lastname": "Koss",
                "email": "Rodrick8@yahoo.com"
                }
        }

    400:  
        {
            "success": false,
            "message": "Cast to ObjectId failed for value \"dfgdg\" at path \"_id\" for model \"Student\""
        }
    
+   POST Search Students by Name
    http://localhost:3000/api/v1/students/:id
    
    req.body:
    {
    "name": "60147ca2cdd50d2b10edb5b1",
    }

    res:
    200:
        {
            "success": true,
            "message": "These all matched with Glover",
            "found": [
                {
                    "firstname": "Gracie",
                    "lastname": "Glover"
                },
                {
                    "firstname": "Forest",
                    "lastname": "Glover"
                },
                {
                    "firstname": "Cynthia",
                    "lastname": "Glover"
                },
                {
                    "firstname": "Alf",
                    "lastname": "Glover"
                }
        }
    404:
        {
            "success": false,
            "message": "No students matched with Glover"
        }