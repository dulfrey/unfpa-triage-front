import { Component, Input } from '@angular/core';
import { NbSortDirection, NbSortRequest, NbTreeGridDataSource, NbTreeGridDataSourceBuilder } from '@nebular/theme';

interface TreeNode<T> {
  data: T;
  children?: TreeNode<T>[];
  expanded?: boolean;
}

interface FSEntry {
  name: string;
  Performance: number;
  Emotions: string;
  Attendance?: number;
  kind:string;
}

@Component({
  selector: 'table-main',
  templateUrl: './table-main.component.html',
  styleUrls: ['./table-main.component.scss'],
})
export class TableMainComponent {
  customColumn = 'name';
  defaultColumns = [ 'Performance', 'Emotions', 'Attendance' ];
  allColumns = [ this.customColumn, ...this.defaultColumns ];

  dataSource: NbTreeGridDataSource<FSEntry>;

  sortColumn: string;
  sortDirection: NbSortDirection = NbSortDirection.NONE;

  constructor(private dataSourceBuilder: NbTreeGridDataSourceBuilder<FSEntry>) {
    this.dataSource = this.dataSourceBuilder.create(this.data);
  }

  updateSort(sortRequest: NbSortRequest): void {
    this.sortColumn = sortRequest.column;
    this.sortDirection = sortRequest.direction;
  }

  getSortDirection(column: string): NbSortDirection {
    if (this.sortColumn === column) {
      return this.sortDirection;
    }
    return NbSortDirection.NONE;
  }

  private data: TreeNode<FSEntry>[] = [
    {
      data: { name: 'Maths' , Performance: 5, Emotions: 'smiley', Attendance: 4 ,kind: 'dir'},
      children: [
        { data: {  name: 'Ada lovelace', Performance: 4, Emotions: 'triumph', Attendance: 4 ,kind: 'IO' } },
        { data: {  name: 'Karl Seagan' , Performance: 2, Emotions: 'smiley', Attendance: 4 ,kind: 'IO'} },
        { data: {  name: 'Pablo Picasso' , Performance: 2, Emotions: 'smiley', Attendance: 4 ,kind: 'IO'} },
        { data: {  name: 'Andrew Williams' , Performance: 3, Emotions: 'sweat', Attendance: 4 ,kind: 'IO' } },
      ],
    },
    {
      data: { name: 'philosophy' , Performance: 2, Emotions: 'sweat', Attendance: 4 ,kind: 'dir'},
      children: [
        { data: {  name: 'Mary Jain' , Performance: 2, Emotions: 'triumph', Attendance: 4 ,kind: 'no' } },
        { data: {  name: 'Robert P.' , Performance: 2, Emotions: 'triumph', Attendance: 4,kind: 'no' } },
      ],
    },
    {
      data: { name: 'geography' , Performance: 4, Emotions: 'triumph', Attendance: 4 ,kind: 'dir' },
      children: [
        { data: { name: 'Karl Marx' , Performance: 4, Emotions: 'triumph', Attendance: 4 ,kind: 'IO' } },
        { data: { name: 'Max Plank' , Performance: 4, Emotions: 'triumph', Attendance: 4 ,kind: 'IO' } },
      ],
    },
  ];

  getShowOn(index: number) {
    const minWithForMultipleColumns = 400;
    const nextColumnStep = 100;
    return minWithForMultipleColumns + (nextColumnStep * index);
  }
  isEmoji(data){
    switch (data) {
      case 'smiley':
          return true;
        

      case 'triumph':
        return true;
        break;
      case 'sweat':
        return true;
        break;
    
      default:
        return false;
        break;
    }
    return 
  }
}

@Component({
  selector: 'ngx-fs-icon',
  template: `
    <nb-tree-grid-row-toggle [expanded]="expanded" *ngIf="isDir(); else fileIcon">
    </nb-tree-grid-row-toggle>
    <ng-template #fileIcon>
      <nb-icon icon="file-text-outline"></nb-icon>
    </ng-template>
  `,
})
export class FsIconComponent {
  @Input() kind: string;
  @Input() expanded: boolean;

  isDir(): boolean {
    return this.kind === 'dir';
  }
}
