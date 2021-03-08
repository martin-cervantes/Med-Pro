Rails.application.routes.draw do
  root 'homepage#index'

  namespace :api do
    get 'doctors/index'
    post 'doctors/create'
    get '/doctors/:id', to: 'doctors#show'
    put '/doctors/:id', to: 'doctors#update'
    delete '/doctors/:id', to: 'doctors#destroy'

    get 'patients/index'
    post 'patients/create'
    get '/patients/:id', to: 'patients#show'
    put '/patients/:id', to: 'patients#update'
    delete '/patients/:id', to: 'patients#destroy'

    get 'appointments/index'
    post 'appointments/create'
    get '/appointments/:id', to: 'appointments#show'
    put '/appointments/:id', to: 'appointments#update'
    delete '/appointments/:id', to: 'appointments#destroy'
  end

  get '/*path' => 'homepage#index'
end
