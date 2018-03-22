import React from 'react';
import UserData from './User-data';
import UserRoutes from "./User-routes";

const UserDefault = [{name: 'Pepito Perez', url: 'https://user-images.githubusercontent.com/32296142/37617229-801944a0-2b80-11e8-9a04-2646a54ff368.png', register: 'Miembro desde enero 2018'}]

const RoutesDefault = [
  {place: 'Ayacucho', sport: 'Escalada', level: 'Muy difícil', },
  {place: 'Arequipa', sport: 'Mountain bike', level: 'difícil', },
  {place: 'Piura', sport: 'Trekking', level: 'fácil', }
]

const Profile = () => (
  <div className = "container mb-7">
    <UserData user = {UserDefault[0]} />
    <UserRoutes routes = {RoutesDefault} />
  </div>
)
export default Profile