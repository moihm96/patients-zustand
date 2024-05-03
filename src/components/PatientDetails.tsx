import { usePatientStore } from "../store";
import { Patient } from "../types";
import PatientDetailsItem from "./PatientDetailsItem";

type PatientDetailsProps = {
  patient: Patient;
};
export default function PatientDetails({ patient }: PatientDetailsProps) {
  const { deletePatient } = usePatientStore();
  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
      <PatientDetailsItem label="ID" value={patient.id} />
      <PatientDetailsItem label="Paciente" value={patient.name} />
      <PatientDetailsItem label="Propietario" value={patient.caretaker} />
      <PatientDetailsItem label="Email" value={patient.email} />
      <PatientDetailsItem label="Fecha" value={patient.date.toString()} />
      <PatientDetailsItem label="Sintomas" value={patient.symptoms} />

      <div className="flex justify-between gap-3 mt-10">
        <button className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg">
          Editar
        </button>
        <button
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
          onClick={() => deletePatient(patient.id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}
