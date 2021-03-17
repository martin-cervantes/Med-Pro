class Api::PatientsController < ApplicationController
  def index
    patients = Patient.all
    render json: patients
  end

  def show
    if patient
      render json: patient
    else
      render json: patient.errors
    end
  end

  def create
    patient = Patient.create!(patient_params)
    if patient
      render json: patient
    else
      render json: patient.errors
    end
  end

  def update
    if patient
      patient.update!(patient_params)
      render json: patient
    else
      render json: patient.errors
    end
  end

  def destroy
    patient&.destroy
    render json: { message: 'Patient deleted!' }
  end

  private

  def patient
    @patient ||= Patient.find(params[:id])
  end

  def patient_params
    params.permit(:first_name, :last_name, :email)
  end
end
