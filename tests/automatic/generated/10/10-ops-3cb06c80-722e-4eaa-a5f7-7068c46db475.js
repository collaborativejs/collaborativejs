var clv = require("../../../../index.js");
var assert = require("assert");

describe("Generated test - rm/ins/undo/undo/rm/ins/ins/rm/ins/ins - 10-ops-3cb06c80-722e-4eaa-a5f7-7068c46db475", function() {
  var doc1 = new clv.string.Document("163cfd90-537e-11e7-a087-55438491864c", 0, null);
  var doc2 = new clv.string.Document("163ef960-537e-11e7-a087-55438491864c", 0, null);
  var doc3 = new clv.string.Document("16408000-537e-11e7-a087-55438491864c", 0, null);
  var data1 = "Hello World";
  var data2 = "Hello World";
  var data3 = "Hello World";

  var serverData = {"id":"bee1c52d-25cd-4f08-ae1f-fb646628cdb9","data":"Hello World","ops":[],"execOrder":0,"context":null};
  it("Site 163cfd90-537e-11e7-a087-55438491864c operations should be executed without errors", function() {
    var commit1 = [{"type":1,"at":5,"value":" Wo"}];
    var commitTuple1 = doc1.commit(commit1);
    data1 = clv.string.exec(data1, commitTuple1.toExec);

    var update1 = [{"siteId":"163cfd90-537e-11e7-a087-55438491864c","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":5,"value":" Wo"},"execOrder":1}];
    var updateTuple1 = doc1.update(update1);
    data1 = clv.string.exec(data1, updateTuple1.toExec);

    var update2 = [{"siteId":"16408000-537e-11e7-a087-55438491864c","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":5,"value":"r"},"execOrder":2}];
    var updateTuple2 = doc1.update(update2);
    data1 = clv.string.exec(data1, updateTuple2.toExec);

    var commit2 = [{"type":0,"at":6,"value":"t"}];
    var commitTuple2 = doc1.commit(commit2);
    data1 = clv.string.exec(data1, commitTuple2.toExec);

    var update3 = [{"siteId":"16408000-537e-11e7-a087-55438491864c","seqId":2,"context":{"vector":{"16408000-537e-11e7-a087-55438491864c":{"seqId":1,"invCluster":{},"invClusterSize":0},"163cfd90-537e-11e7-a087-55438491864c":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":6,"value":"ld"},"execOrder":3},{"siteId":"163cfd90-537e-11e7-a087-55438491864c","seqId":2,"context":{"vector":{"163cfd90-537e-11e7-a087-55438491864c":{"seqId":1,"invCluster":{},"invClusterSize":0},"16408000-537e-11e7-a087-55438491864c":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":6,"value":"t"},"execOrder":4}];
    var updateTuple3 = doc1.update(update3);
    data1 = clv.string.exec(data1, updateTuple3.toExec);

    var update4 = [{"siteId":"16408000-537e-11e7-a087-55438491864c","seqId":3,"context":{"vector":{"16408000-537e-11e7-a087-55438491864c":{"seqId":2,"invCluster":{},"invClusterSize":0},"163cfd90-537e-11e7-a087-55438491864c":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":6,"value":"wq"},"execOrder":5}];
    var updateTuple4 = doc1.update(update4);
    data1 = clv.string.exec(data1, updateTuple4.toExec);

    var commitTuple3 = doc1.undo();
    data1 = clv.string.exec(data1, commitTuple3.toExec);

    var update5 = [{"siteId":"16408000-537e-11e7-a087-55438491864c","seqId":4,"context":{"vector":{"16408000-537e-11e7-a087-55438491864c":{"seqId":3,"invCluster":{},"invClusterSize":0},"163cfd90-537e-11e7-a087-55438491864c":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":2,"value":"q"},"execOrder":6},{"siteId":"163cfd90-537e-11e7-a087-55438491864c","seqId":2,"context":{"vector":{"163cfd90-537e-11e7-a087-55438491864c":{"seqId":2,"invCluster":{},"invClusterSize":0},"16408000-537e-11e7-a087-55438491864c":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":6,"value":"t"},"execOrder":7}];
    var updateTuple5 = doc1.update(update5);
    data1 = clv.string.exec(data1, updateTuple5.toExec);

    var commitTuple4 = doc1.undo();
    data1 = clv.string.exec(data1, commitTuple4.toExec);

    var update6 = [{"siteId":"163cfd90-537e-11e7-a087-55438491864c","seqId":1,"context":{"vector":{"163cfd90-537e-11e7-a087-55438491864c":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":0,"at":5,"value":" Wo"},"execOrder":8}];
    var updateTuple6 = doc1.update(update6);
    data1 = clv.string.exec(data1, updateTuple6.toExec);

    var update7 = [{"siteId":"163ef960-537e-11e7-a087-55438491864c","seqId":1,"context":{"vector":{"163cfd90-537e-11e7-a087-55438491864c":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"16408000-537e-11e7-a087-55438491864c":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":1,"value":"e"},"execOrder":9},{"siteId":"163ef960-537e-11e7-a087-55438491864c","seqId":2,"context":{"vector":{"163cfd90-537e-11e7-a087-55438491864c":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"16408000-537e-11e7-a087-55438491864c":{"seqId":4,"invCluster":{},"invClusterSize":0},"163ef960-537e-11e7-a087-55438491864c":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":6,"value":"t"},"execOrder":10}];
    var updateTuple7 = doc1.update(update7);
    data1 = clv.string.exec(data1, updateTuple7.toExec);

  });

  it("Site 163ef960-537e-11e7-a087-55438491864c operations should be executed without errors", function() {
    var update1 = [{"siteId":"163cfd90-537e-11e7-a087-55438491864c","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":5,"value":" Wo"},"execOrder":1}];
    var updateTuple1 = doc2.update(update1);
    data2 = clv.string.exec(data2, updateTuple1.toExec);

    var update2 = [{"siteId":"16408000-537e-11e7-a087-55438491864c","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":5,"value":"r"},"execOrder":2}];
    var updateTuple2 = doc2.update(update2);
    data2 = clv.string.exec(data2, updateTuple2.toExec);

    var update3 = [{"siteId":"16408000-537e-11e7-a087-55438491864c","seqId":2,"context":{"vector":{"16408000-537e-11e7-a087-55438491864c":{"seqId":1,"invCluster":{},"invClusterSize":0},"163cfd90-537e-11e7-a087-55438491864c":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":6,"value":"ld"},"execOrder":3},{"siteId":"163cfd90-537e-11e7-a087-55438491864c","seqId":2,"context":{"vector":{"163cfd90-537e-11e7-a087-55438491864c":{"seqId":1,"invCluster":{},"invClusterSize":0},"16408000-537e-11e7-a087-55438491864c":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":6,"value":"t"},"execOrder":4}];
    var updateTuple3 = doc2.update(update3);
    data2 = clv.string.exec(data2, updateTuple3.toExec);

    var update4 = [{"siteId":"16408000-537e-11e7-a087-55438491864c","seqId":3,"context":{"vector":{"16408000-537e-11e7-a087-55438491864c":{"seqId":2,"invCluster":{},"invClusterSize":0},"163cfd90-537e-11e7-a087-55438491864c":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":6,"value":"wq"},"execOrder":5}];
    var updateTuple4 = doc2.update(update4);
    data2 = clv.string.exec(data2, updateTuple4.toExec);

    var update5 = [{"siteId":"16408000-537e-11e7-a087-55438491864c","seqId":4,"context":{"vector":{"16408000-537e-11e7-a087-55438491864c":{"seqId":3,"invCluster":{},"invClusterSize":0},"163cfd90-537e-11e7-a087-55438491864c":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":2,"value":"q"},"execOrder":6}];
    var updateTuple5 = doc2.update(update5);
    data2 = clv.string.exec(data2, updateTuple5.toExec);

    var update6 = [{"siteId":"163cfd90-537e-11e7-a087-55438491864c","seqId":2,"context":{"vector":{"163cfd90-537e-11e7-a087-55438491864c":{"seqId":2,"invCluster":{},"invClusterSize":0},"16408000-537e-11e7-a087-55438491864c":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":6,"value":"t"},"execOrder":7},{"siteId":"163cfd90-537e-11e7-a087-55438491864c","seqId":1,"context":{"vector":{"163cfd90-537e-11e7-a087-55438491864c":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":0,"at":5,"value":" Wo"},"execOrder":8}];
    var updateTuple6 = doc2.update(update6);
    data2 = clv.string.exec(data2, updateTuple6.toExec);

    var commit1 = [{"type":1,"at":1,"value":"e"}];
    var commitTuple1 = doc2.commit(commit1);
    data2 = clv.string.exec(data2, commitTuple1.toExec);

    var update7 = [{"siteId":"163ef960-537e-11e7-a087-55438491864c","seqId":1,"context":{"vector":{"163cfd90-537e-11e7-a087-55438491864c":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"16408000-537e-11e7-a087-55438491864c":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":1,"value":"e"},"execOrder":9}];
    var updateTuple7 = doc2.update(update7);
    data2 = clv.string.exec(data2, updateTuple7.toExec);

    var commit2 = [{"type":0,"at":6,"value":"t"}];
    var commitTuple2 = doc2.commit(commit2);
    data2 = clv.string.exec(data2, commitTuple2.toExec);

    var update8 = [{"siteId":"163ef960-537e-11e7-a087-55438491864c","seqId":2,"context":{"vector":{"163cfd90-537e-11e7-a087-55438491864c":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"16408000-537e-11e7-a087-55438491864c":{"seqId":4,"invCluster":{},"invClusterSize":0},"163ef960-537e-11e7-a087-55438491864c":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":6,"value":"t"},"execOrder":10}];
    var updateTuple8 = doc2.update(update8);
    data2 = clv.string.exec(data2, updateTuple8.toExec);

  });

  it("Site 16408000-537e-11e7-a087-55438491864c operations should be executed without errors", function() {
    var commit1 = [{"type":0,"at":5,"value":"r"}];
    var commitTuple1 = doc3.commit(commit1);
    data3 = clv.string.exec(data3, commitTuple1.toExec);

    var update1 = [{"siteId":"163cfd90-537e-11e7-a087-55438491864c","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":5,"value":" Wo"},"execOrder":1}];
    var updateTuple1 = doc3.update(update1);
    data3 = clv.string.exec(data3, updateTuple1.toExec);

    var commit2 = [{"type":1,"at":6,"value":"ld"}];
    var commitTuple2 = doc3.commit(commit2);
    data3 = clv.string.exec(data3, commitTuple2.toExec);

    var update2 = [{"siteId":"16408000-537e-11e7-a087-55438491864c","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":5,"value":"r"},"execOrder":2}];
    var updateTuple2 = doc3.update(update2);
    data3 = clv.string.exec(data3, updateTuple2.toExec);

    var update3 = [{"siteId":"16408000-537e-11e7-a087-55438491864c","seqId":2,"context":{"vector":{"16408000-537e-11e7-a087-55438491864c":{"seqId":1,"invCluster":{},"invClusterSize":0},"163cfd90-537e-11e7-a087-55438491864c":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":6,"value":"ld"},"execOrder":3}];
    var updateTuple3 = doc3.update(update3);
    data3 = clv.string.exec(data3, updateTuple3.toExec);

    var commit3 = [{"type":0,"at":6,"value":"wq"}];
    var commitTuple3 = doc3.commit(commit3);
    data3 = clv.string.exec(data3, commitTuple3.toExec);

    var update4 = [{"siteId":"163cfd90-537e-11e7-a087-55438491864c","seqId":2,"context":{"vector":{"163cfd90-537e-11e7-a087-55438491864c":{"seqId":1,"invCluster":{},"invClusterSize":0},"16408000-537e-11e7-a087-55438491864c":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":6,"value":"t"},"execOrder":4}];
    var updateTuple4 = doc3.update(update4);
    data3 = clv.string.exec(data3, updateTuple4.toExec);

    var commit4 = [{"type":0,"at":2,"value":"q"}];
    var commitTuple4 = doc3.commit(commit4);
    data3 = clv.string.exec(data3, commitTuple4.toExec);

    var update5 = [{"siteId":"16408000-537e-11e7-a087-55438491864c","seqId":3,"context":{"vector":{"16408000-537e-11e7-a087-55438491864c":{"seqId":2,"invCluster":{},"invClusterSize":0},"163cfd90-537e-11e7-a087-55438491864c":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":6,"value":"wq"},"execOrder":5}];
    var updateTuple5 = doc3.update(update5);
    data3 = clv.string.exec(data3, updateTuple5.toExec);

    var update6 = [{"siteId":"16408000-537e-11e7-a087-55438491864c","seqId":4,"context":{"vector":{"16408000-537e-11e7-a087-55438491864c":{"seqId":3,"invCluster":{},"invClusterSize":0},"163cfd90-537e-11e7-a087-55438491864c":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":2,"value":"q"},"execOrder":6}];
    var updateTuple6 = doc3.update(update6);
    data3 = clv.string.exec(data3, updateTuple6.toExec);

    var update7 = [{"siteId":"163cfd90-537e-11e7-a087-55438491864c","seqId":2,"context":{"vector":{"163cfd90-537e-11e7-a087-55438491864c":{"seqId":2,"invCluster":{},"invClusterSize":0},"16408000-537e-11e7-a087-55438491864c":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":6,"value":"t"},"execOrder":7}];
    var updateTuple7 = doc3.update(update7);
    data3 = clv.string.exec(data3, updateTuple7.toExec);

    var update8 = [{"siteId":"163cfd90-537e-11e7-a087-55438491864c","seqId":1,"context":{"vector":{"163cfd90-537e-11e7-a087-55438491864c":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":0,"at":5,"value":" Wo"},"execOrder":8}];
    var updateTuple8 = doc3.update(update8);
    data3 = clv.string.exec(data3, updateTuple8.toExec);

    var update9 = [{"siteId":"163ef960-537e-11e7-a087-55438491864c","seqId":1,"context":{"vector":{"163cfd90-537e-11e7-a087-55438491864c":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"16408000-537e-11e7-a087-55438491864c":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":1,"value":"e"},"execOrder":9}];
    var updateTuple9 = doc3.update(update9);
    data3 = clv.string.exec(data3, updateTuple9.toExec);

    var update10 = [{"siteId":"163ef960-537e-11e7-a087-55438491864c","seqId":2,"context":{"vector":{"163cfd90-537e-11e7-a087-55438491864c":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"16408000-537e-11e7-a087-55438491864c":{"seqId":4,"invCluster":{},"invClusterSize":0},"163ef960-537e-11e7-a087-55438491864c":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":6,"value":"t"},"execOrder":10}];
    var updateTuple10 = doc3.update(update10);
    data3 = clv.string.exec(data3, updateTuple10.toExec);

  });

  it("Server operations should be executed without errors", function() {
    function updateServer(op) {
      var server = new clv.string.Document(null, serverData.execOrder, serverData.context);
      server.update(serverData.ops);
      var serverTuple = server.update(op);
      serverData.data = clv.string.exec(serverData.data, serverTuple.toExec);
      serverData.context = server.getContext();
      serverData.ops.push(op);
      serverData.execOrder = server.getExecOrder();
    }

    var serverUpdate0 = {"siteId":"163cfd90-537e-11e7-a087-55438491864c","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":5,"value":" Wo"},"execOrder":1};
    updateServer(serverUpdate0);

    var serverUpdate1 = {"siteId":"16408000-537e-11e7-a087-55438491864c","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":0,"at":5,"value":"r"},"execOrder":2};
    updateServer(serverUpdate1);

    var serverUpdate2 = {"siteId":"16408000-537e-11e7-a087-55438491864c","seqId":2,"context":{"vector":{"16408000-537e-11e7-a087-55438491864c":{"seqId":1,"invCluster":{},"invClusterSize":0},"163cfd90-537e-11e7-a087-55438491864c":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":6,"value":"ld"},"execOrder":3};
    updateServer(serverUpdate2);

    var serverUpdate3 = {"siteId":"163cfd90-537e-11e7-a087-55438491864c","seqId":2,"context":{"vector":{"163cfd90-537e-11e7-a087-55438491864c":{"seqId":1,"invCluster":{},"invClusterSize":0},"16408000-537e-11e7-a087-55438491864c":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":6,"value":"t"},"execOrder":4};
    updateServer(serverUpdate3);

    var serverUpdate4 = {"siteId":"16408000-537e-11e7-a087-55438491864c","seqId":3,"context":{"vector":{"16408000-537e-11e7-a087-55438491864c":{"seqId":2,"invCluster":{},"invClusterSize":0},"163cfd90-537e-11e7-a087-55438491864c":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":6,"value":"wq"},"execOrder":5};
    updateServer(serverUpdate4);

    var serverUpdate5 = {"siteId":"16408000-537e-11e7-a087-55438491864c","seqId":4,"context":{"vector":{"16408000-537e-11e7-a087-55438491864c":{"seqId":3,"invCluster":{},"invClusterSize":0},"163cfd90-537e-11e7-a087-55438491864c":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":0,"at":2,"value":"q"},"execOrder":6};
    updateServer(serverUpdate5);

    var serverUpdate6 = {"siteId":"163cfd90-537e-11e7-a087-55438491864c","seqId":2,"context":{"vector":{"163cfd90-537e-11e7-a087-55438491864c":{"seqId":2,"invCluster":{},"invClusterSize":0},"16408000-537e-11e7-a087-55438491864c":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":1,"load":{"type":1,"at":6,"value":"t"},"execOrder":7};
    updateServer(serverUpdate6);

    var serverUpdate7 = {"siteId":"163cfd90-537e-11e7-a087-55438491864c","seqId":1,"context":{"vector":{"163cfd90-537e-11e7-a087-55438491864c":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":0,"at":5,"value":" Wo"},"execOrder":8};
    updateServer(serverUpdate7);

    var serverUpdate8 = {"siteId":"163ef960-537e-11e7-a087-55438491864c","seqId":1,"context":{"vector":{"163cfd90-537e-11e7-a087-55438491864c":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"16408000-537e-11e7-a087-55438491864c":{"seqId":4,"invCluster":{},"invClusterSize":0}},"size":2},"invCount":0,"load":{"type":1,"at":1,"value":"e"},"execOrder":9};
    updateServer(serverUpdate8);

    var serverUpdate9 = {"siteId":"163ef960-537e-11e7-a087-55438491864c","seqId":2,"context":{"vector":{"163cfd90-537e-11e7-a087-55438491864c":{"seqId":2,"invCluster":{"1":1,"2":1},"invClusterSize":2},"16408000-537e-11e7-a087-55438491864c":{"seqId":4,"invCluster":{},"invClusterSize":0},"163ef960-537e-11e7-a087-55438491864c":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":3},"invCount":0,"load":{"type":0,"at":6,"value":"t"},"execOrder":10};
    updateServer(serverUpdate9);

  });

  it("All sites should have same data with the server", function() {
    assert.equal(data1, serverData.data, "Site 1 data should be equal to server");
    assert.equal(data2, serverData.data, "Site 2 data should be equal to server");
    assert.equal(data3, serverData.data, "Site 3 data should be equal to server");
  });

});
