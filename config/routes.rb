Rails.application.routes.draw do
  root 'homepage#index'

  namespace :api do
    get 'doctors/index'
    post 'doctors/create'
    get '/show/:id', to: 'doctors#show'
    put '/update/:id', to: 'doctors#update'
    delete '/destroy/:id', to: 'doctors#destroy'
  end

  get '/*path' => 'homepage#index'
end
