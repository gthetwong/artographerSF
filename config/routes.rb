Artographer::Application.routes.draw do
    get '/signup' => 'users#new'
    delete '/signout' => 'sessions#destroy'
    get '/signin' => 'sessions#new'
    get '/events/all' => 'events#all'
    root to: "site#index"
    resources :site, :events, :users, :sessions
end
