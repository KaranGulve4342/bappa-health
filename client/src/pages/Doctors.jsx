// Doctor.jsx
import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import doctors from './../data/doctors.json'; // Import the JSON data

export function Doctor() {
  return (
    <>
        <div className="flex items-center">
            <h1 className="text-lg font-bold md:text-3xl mb-4">🧑‍⚕️ Meet our Doctors🩺 Here..</h1>
        </div>
        <div className="ml-10 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4 my-4">
        {doctors.map((doctor, index) => (
            <Card key={index} className="w-[300px] text-center my-4">
            <CardHeader>
                <CardTitle>{doctor.name}</CardTitle> {/* Doctor's name */}
            </CardHeader>
            <CardContent>
                <img
                src={doctor.image}
                alt={`${doctor.name}'s image`}
                style={{ width: '160px', height: '200px' }}
                className="mx-auto mb-4 w-24 h-30 rounded-full object-cover"
                /> {/* Doctor's image */}
                <CardDescription>{doctor.specialty}</CardDescription> {/* Doctor's specialty */}
            </CardContent>
            <CardFooter className="flex justify-center">
                <Button>Book Appointment</Button> {/* Book Appointment button */}
            </CardFooter>
            </Card>
        ))}
        </div>
    </>
  );
}
