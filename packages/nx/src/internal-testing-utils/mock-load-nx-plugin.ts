jest.mock('nx/src/project-graph/plugins/loader', () => ({
  loadNxPlugin: jest.fn().mockImplementation(() => {
    return [
      Promise.resolve({
        createNodes: ['', () => {}],
        createDependencies: () => [],
        include: [],
        exclude: [],
      }),
      () => {},
    ];
  }),
}));
