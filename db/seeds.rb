d = Doctor.new
d.first_name = "Miranda"
d.last_name = "Bailey"
d.medical_speciality = "General surgery"
d.email = "mbailey@hotcakes.com"
d.save

d = Doctor.new
d.first_name = "Owen"
d.last_name = "Hunt"
d.medical_speciality = "Trauma surgery"
d.email = "ohunt@hotcakes.com"
d.save

d = Doctor.new
d.first_name = "Derek"
d.last_name = "Shepherd"
d.medical_speciality = "Neurosurgery"
d.email = "dshepherd@hotcakes.com"
d.save

d = Doctor.new
d.first_name = "Jackson"
d.last_name = "Avery"
d.medical_speciality = "Plastic surgery"
d.email = "javery@hotcakes.com"
d.save

d = Doctor.new
d.first_name = "Preston"
d.last_name = "Burke"
d.medical_speciality = "Cardiothoracic surgery"
d.email = "pburke@hotcakes.com"
d.save

p = Patient.new
p.first_name = "Denny"
p.last_name = "Duquette"
p.email = "dduquette@hotcakes.com"
p.save

p = Patient.new
p.first_name = "Mary"
p.last_name = "Portman"
p.email = "mportman@hotcakes.com"
p.save

p = Patient.new
p.first_name = "Henry"
p.last_name = "Burton"
p.email = "hburton@hotcakes.com"
p.save

p = Patient.new
p.first_name = "Nick"
p.last_name = "Marsh"
p.email = "nmarsh@hotcakes.com"
p.save

p = Patient.new
p.first_name = "Zola"
p.last_name = "Shepherd"
p.email = "zshepherd@hotcakes.com"
p.save

a = Appointment.new
a.doctor_id =  1
a.patient_id =  5
a.date =  "2021-04-05"
a.time =  "10:00"
a.save

a = Appointment.new
a.doctor_id =  2
a.patient_id =  4
a.date =  "2021-03-25"
a.time =  "10:00"
a.save

a = Appointment.new
a.doctor_id =  3
a.patient_id =  3
a.date =  "2021-03-30"
a.time =  "12:00"
a.save

a = Appointment.new
a.doctor_id =  4
a.patient_id =  2
a.date =  "2021-03-22"
a.time =  "13:00"
a.save

a = Appointment.new
a.doctor_id =  5
a.patient_id =  1
a.date =  "2021-04-01"
a.time =  "15:00"
a.save

# d.username = "mbailey"
# d.password = 123456
# d.username = "ohunt"
# d.password = 123456
# d.username = "dshepherd"
# d.password = 123456
# d.username = "javery"
# d.password = 123456
# d.username = "pburke"
# d.password = 123456
# p.username = "dduquette"
# p.password = "123456"
# p.username = "mportman"
# p.password = "123456"
# p.username = "hburton"
# p.password = "123456"
# p.username = "nmarsh"
# p.password = "123456"
# p.username = "zshepherd"
# p.password = "123456"
