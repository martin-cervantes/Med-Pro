class Api::AppointmentsController < ApplicationController
  def index
    appointments = Appointment.all
    render json: appointments
  end

  def show
    if appointment
      render json: appointment
    else
      render json: appointment.errors
    end
  end

  def create
    appointment = Appointment.create!(appointment_params)
    if appointment
      render json: appointment
    else
      render json: appointment.errors
    end
  end

  def update
    if appointment
      appointment.update!(appointment_params)
      render json: appointment
    else
      render json: appointment.errors
    end
  end

  def destroy
    appointment&.destroy
    render json: { message: 'Appointment deleted!' }
  end

  private

  def appointment
    @appointment ||= Appointment.find(params[:id])
  end

  def appointment_params
    params.permit(:doctor_id, :patient_id, :date, :time)
  end
end
