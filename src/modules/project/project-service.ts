import { Injectable } from 'angular2/core';
import { AuthService } from '../auth/auth-service';


@Injectable()
export class ProjectService {
  list: any[] = [];

  constructor(private auth: AuthService) {}

  fetchProjects(pin: number): Promise<any> {
    return this.auth.authenticate(pin)
      .then((authenticated: boolean) => {
        if (!authenticated) {
          this.list = [];
          return this.list;
        }
        else {
          this.list = [
            {name: 'Project 1'},
            {name: 'Project 2'}
          ];

          return this.list;
        }
      });
  }
}
