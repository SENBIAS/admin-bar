import { Component, OnInit } from '@angular/core';
import { images } from '../models/dto/images';

@Component({
  selector: 'app-tables-bar',
  templateUrl: './tables-bar.component.html',
  styleUrls: ['./tables-bar.component.css'],
})
export class TablesBarComponent implements OnInit {
  items!: string[];
  visible!: boolean;
  edit!: boolean;

  visibleModal!: boolean;
  mesas_2: images[] = [
    {
      nombre: 'Mesa 1',
      url: '../../assets/images/pngtree-display-shelf-dining-table-sofa-bar-living-room-decoration-renderings-picture-image_2423069.png',
      edit: true,
    },
    {
      nombre: 'Mesa 2',
      url: '../../assets/images/pngtree-display-shelf-dining-table-sofa-bar-living-room-decoration-renderings-picture-image_2423069.png',
      edit: true,
    },
    {
      nombre: 'Mesa 3',
      url: '../../assets/images/pngtree-display-shelf-dining-table-sofa-bar-living-room-decoration-renderings-picture-image_2423069.png',
      edit: true,
    },
    {
      nombre: 'Mesa 4',
      url: '../../assets/images/pngtree-display-shelf-dining-table-sofa-bar-living-room-decoration-renderings-picture-image_2423069.png',
      edit: true,
    },
    {
      nombre: 'Mesa 5',
      url: '../../assets/images/pngtree-display-shelf-dining-table-sofa-bar-living-room-decoration-renderings-picture-image_2423069.png',
      edit: false,
    },
    {
      nombre: 'Mesa 6',
      url: '../../assets/images/pngtree-display-shelf-dining-table-sofa-bar-living-room-decoration-renderings-picture-image_2423069.png',
      edit: false,
    },
    {
      nombre: 'Sala 1',
      url: '../../assets/images/pngtree-display-shelf-dining-table-sofa-bar-living-room-decoration-renderings-picture-image_2423069.png',
      edit: false,
    },
    {
      nombre: 'Sala 2',
      url: '../../assets/images/pngtree-display-shelf-dining-table-sofa-bar-living-room-decoration-renderings-picture-image_2423069.png',
      edit: false,
    },
  ];
  mesas = [
    'Mesa 1',
    'Mesa 2',
    'Mesa 3',
    'Mesa 4',
    'Mesa 5',
    'Mesa 6',
    'Sala 1',
    'Sala 2',
  ];

  showDialog() {
    this.visibleModal = true;
  }

  showEdit(nombre: string | undefined) {
    debugger;
    this.edit = !this.edit;
  }

  ngOnInit() {
    this.items = Array.from({ length: 1000 }).map((_, i) => `Item #${i}`);
    this.visible = false;
    this.edit = true;
  }
}
