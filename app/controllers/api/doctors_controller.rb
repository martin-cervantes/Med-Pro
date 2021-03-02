class Api::DoctorsController < ApplicationController
  def index
    doctors = Doctor.all
    render json: doctors
  end

  def show
    if doctor
      render json: doctor
    else
      render json: doctor.errors
    end
  end

  def create
    doctor = Doctor.create!(doctor_params)
    if doctor
      render json: doctor
    else
      render json: doctor.errors
    end
  end

  def update
    if doctor
      doctor.update!(doctor_params)
      render json: doctor
    else
      render json: doctor.errors
    end
  end

  def destroy
    byebug
    doctor&.destroy
    render json: { message: 'Doctor deleted!' }
  end

  private

  def doctor
    @doctor ||= Doctor.find(params[:id])
  end

  def doctor_params
    params.permit(:name, :image, :ingredients, :instruction)
  end
end
