var clv = require("collaborativejs");
var assert = require("assert");

describe("Generated test - rm/rm/undo/rm/rm/undo/undo/ins/undo/undo/rm/undo/ins/undo/redo/rm/rm/ins/rm/rm - 20-ops-f8ce989f-db17-488b-b65e-6dfea6588abe", function() {
  var doc1 = new clv.string.Document("916e33c0-537f-11e7-80ac-bd67c573e4e8", 0, null);
  var data1 = "Hello World";

  var serverData = {"id":"41b2234e-8ace-4648-94f4-3a15999867ef","data":"Hello World","ops":[],"execOrder":0,"context":null};
  it("Site 916e33c0-537f-11e7-80ac-bd67c573e4e8 operations should be executed without errors", function() {
    var commit1 = [{"type":1,"at":5,"value":" Wo"}];
    var commitTuple1 = doc1.commit(commit1);
    data1 = clv.string.exec(data1, commitTuple1.toExec);

    var commit2 = [{"type":1,"at":2,"value":"ll"}];
    var commitTuple2 = doc1.commit(commit2);
    data1 = clv.string.exec(data1, commitTuple2.toExec);

    var update1 = [{"siteId":"916e33c0-537f-11e7-80ac-bd67c573e4e8","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":5,"value":" Wo"},"execOrder":1}];
    var updateTuple1 = doc1.update(update1);
    data1 = clv.string.exec(data1, updateTuple1.toExec);

    var commitTuple3 = doc1.undo();
    data1 = clv.string.exec(data1, commitTuple3.toExec);

    var update2 = [{"siteId":"916e33c0-537f-11e7-80ac-bd67c573e4e8","seqId":2,"context":{"vector":{"916e33c0-537f-11e7-80ac-bd67c573e4e8":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":1,"at":2,"value":"ll"},"execOrder":2}];
    var updateTuple2 = doc1.update(update2);
    data1 = clv.string.exec(data1, updateTuple2.toExec);

    var commit4 = [{"type":1,"at":5,"value":"r"}];
    var commitTuple4 = doc1.commit(commit4);
    data1 = clv.string.exec(data1, commitTuple4.toExec);

    var update3 = [{"siteId":"916e33c0-537f-11e7-80ac-bd67c573e4e8","seqId":2,"context":{"vector":{"916e33c0-537f-11e7-80ac-bd67c573e4e8":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":0,"at":2,"value":"ll"},"execOrder":3}];
    var updateTuple3 = doc1.update(update3);
    data1 = clv.string.exec(data1, updateTuple3.toExec);

    var commit5 = [{"type":1,"at":5,"value":"ld"}];
    var commitTuple5 = doc1.commit(commit5);
    data1 = clv.string.exec(data1, commitTuple5.toExec);

    var update4 = [{"siteId":"916e33c0-537f-11e7-80ac-bd67c573e4e8","seqId":3,"context":{"vector":{"916e33c0-537f-11e7-80ac-bd67c573e4e8":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1}},"size":1},"invCount":0,"load":{"type":1,"at":5,"value":"r"},"execOrder":4}];
    var updateTuple4 = doc1.update(update4);
    data1 = clv.string.exec(data1, updateTuple4.toExec);

    var commitTuple6 = doc1.undo();
    data1 = clv.string.exec(data1, commitTuple6.toExec);

    var update5 = [{"siteId":"916e33c0-537f-11e7-80ac-bd67c573e4e8","seqId":4,"context":{"vector":{"916e33c0-537f-11e7-80ac-bd67c573e4e8":{"seqId":3,"invCluster":{"2":1},"invClusterSize":1}},"size":1},"invCount":0,"load":{"type":1,"at":5,"value":"ld"},"execOrder":5}];
    var updateTuple5 = doc1.update(update5);
    data1 = clv.string.exec(data1, updateTuple5.toExec);

    var commitTuple7 = doc1.undo();
    data1 = clv.string.exec(data1, commitTuple7.toExec);

    var update6 = [{"siteId":"916e33c0-537f-11e7-80ac-bd67c573e4e8","seqId":4,"context":{"vector":{"916e33c0-537f-11e7-80ac-bd67c573e4e8":{"seqId":4,"invCluster":{"2":1},"invClusterSize":1}},"size":1},"invCount":1,"load":{"type":0,"at":5,"value":"ld"},"execOrder":6}];
    var updateTuple6 = doc1.update(update6);
    data1 = clv.string.exec(data1, updateTuple6.toExec);

    var commit8 = [{"type":0,"at":1,"value":"r"}];
    var commitTuple8 = doc1.commit(commit8);
    data1 = clv.string.exec(data1, commitTuple8.toExec);

    var update7 = [{"siteId":"916e33c0-537f-11e7-80ac-bd67c573e4e8","seqId":3,"context":{"vector":{"916e33c0-537f-11e7-80ac-bd67c573e4e8":{"seqId":3,"invCluster":{"2":1},"invClusterSize":1}},"size":1},"invCount":1,"load":{"type":0,"at":5,"value":"r"},"execOrder":7}];
    var updateTuple7 = doc1.update(update7);
    data1 = clv.string.exec(data1, updateTuple7.toExec);

    var commitTuple9 = doc1.undo();
    data1 = clv.string.exec(data1, commitTuple9.toExec);

    var update8 = [{"siteId":"916e33c0-537f-11e7-80ac-bd67c573e4e8","seqId":5,"context":{"vector":{"916e33c0-537f-11e7-80ac-bd67c573e4e8":{"seqId":4,"invCluster":{"2":1,"3":1,"4":1},"invClusterSize":3}},"size":1},"invCount":0,"load":{"type":0,"at":1,"value":"r"},"execOrder":8}];
    var updateTuple8 = doc1.update(update8);
    data1 = clv.string.exec(data1, updateTuple8.toExec);

    var commitTuple10 = doc1.undo();
    data1 = clv.string.exec(data1, commitTuple10.toExec);

    var update9 = [{"siteId":"916e33c0-537f-11e7-80ac-bd67c573e4e8","seqId":5,"context":{"vector":{"916e33c0-537f-11e7-80ac-bd67c573e4e8":{"seqId":5,"invCluster":{"2":1,"3":1,"4":1},"invClusterSize":3}},"size":1},"invCount":1,"load":{"type":1,"at":1,"value":"r"},"execOrder":9}];
    var updateTuple9 = doc1.update(update9);
    data1 = clv.string.exec(data1, updateTuple9.toExec);

    var commit11 = [{"type":1,"at":0,"value":"H"}];
    var commitTuple11 = doc1.commit(commit11);
    data1 = clv.string.exec(data1, commitTuple11.toExec);

    var update10 = [{"siteId":"916e33c0-537f-11e7-80ac-bd67c573e4e8","seqId":1,"context":{"vector":{"916e33c0-537f-11e7-80ac-bd67c573e4e8":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":0,"at":5,"value":" Wo"},"execOrder":10}];
    var updateTuple10 = doc1.update(update10);
    data1 = clv.string.exec(data1, updateTuple10.toExec);

    var commitTuple12 = doc1.undo();
    data1 = clv.string.exec(data1, commitTuple12.toExec);

    var update11 = [{"siteId":"916e33c0-537f-11e7-80ac-bd67c573e4e8","seqId":6,"context":{"vector":{"916e33c0-537f-11e7-80ac-bd67c573e4e8":{"seqId":5,"invCluster":{"1":1,"2":1,"3":1,"4":1,"5":1},"invClusterSize":5}},"size":1},"invCount":0,"load":{"type":1,"at":0,"value":"H"},"execOrder":11}];
    var updateTuple11 = doc1.update(update11);
    data1 = clv.string.exec(data1, updateTuple11.toExec);

    var commit13 = [{"type":0,"at":11,"value":"r"}];
    var commitTuple13 = doc1.commit(commit13);
    data1 = clv.string.exec(data1, commitTuple13.toExec);

    var update12 = [{"siteId":"916e33c0-537f-11e7-80ac-bd67c573e4e8","seqId":6,"context":{"vector":{"916e33c0-537f-11e7-80ac-bd67c573e4e8":{"seqId":6,"invCluster":{"1":1,"2":1,"3":1,"4":1,"5":1},"invClusterSize":5}},"size":1},"invCount":1,"load":{"type":0,"at":0,"value":"H"},"execOrder":12}];
    var updateTuple12 = doc1.update(update12);
    data1 = clv.string.exec(data1, updateTuple12.toExec);

    var commitTuple14 = doc1.undo();
    data1 = clv.string.exec(data1, commitTuple14.toExec);

    var update13 = [{"siteId":"916e33c0-537f-11e7-80ac-bd67c573e4e8","seqId":7,"context":{"vector":{"916e33c0-537f-11e7-80ac-bd67c573e4e8":{"seqId":6,"invCluster":{"1":1,"2":1,"3":1,"4":1,"5":1,"6":1},"invClusterSize":6}},"size":1},"invCount":0,"load":{"type":0,"at":11,"value":"r"},"execOrder":13}];
    var updateTuple13 = doc1.update(update13);
    data1 = clv.string.exec(data1, updateTuple13.toExec);

    var commitTuple15 = doc1.redo();
    data1 = clv.string.exec(data1, commitTuple15.toExec);

    var update14 = [{"siteId":"916e33c0-537f-11e7-80ac-bd67c573e4e8","seqId":7,"context":{"vector":{"916e33c0-537f-11e7-80ac-bd67c573e4e8":{"seqId":7,"invCluster":{"1":1,"2":1,"3":1,"4":1,"5":1,"6":1},"invClusterSize":6}},"size":1},"invCount":1,"load":{"type":1,"at":11,"value":"r"},"execOrder":14}];
    var updateTuple14 = doc1.update(update14);
    data1 = clv.string.exec(data1, updateTuple14.toExec);

    var commit16 = [{"type":1,"at":2,"value":"llo"}];
    var commitTuple16 = doc1.commit(commit16);
    data1 = clv.string.exec(data1, commitTuple16.toExec);

    var update15 = [{"siteId":"916e33c0-537f-11e7-80ac-bd67c573e4e8","seqId":7,"context":{"vector":{"916e33c0-537f-11e7-80ac-bd67c573e4e8":{"seqId":7,"invCluster":{"1":1,"2":1,"3":1,"4":1,"5":1,"6":1,"7":1},"invClusterSize":7}},"size":1},"invCount":2,"load":{"type":0,"at":11,"value":"r"},"execOrder":15}];
    var updateTuple15 = doc1.update(update15);
    data1 = clv.string.exec(data1, updateTuple15.toExec);

    var commit17 = [{"type":1,"at":3,"value":"Wor"}];
    var commitTuple17 = doc1.commit(commit17);
    data1 = clv.string.exec(data1, commitTuple17.toExec);

    var update16 = [{"siteId":"916e33c0-537f-11e7-80ac-bd67c573e4e8","seqId":8,"context":{"vector":{"916e33c0-537f-11e7-80ac-bd67c573e4e8":{"seqId":7,"invCluster":{"1":1,"2":1,"3":1,"4":1,"5":1,"6":1,"7":2},"invClusterSize":7}},"size":1},"invCount":0,"load":{"type":1,"at":2,"value":"llo"},"execOrder":16}];
    var updateTuple16 = doc1.update(update16);
    data1 = clv.string.exec(data1, updateTuple16.toExec);

    var commit18 = [{"type":0,"at":6,"value":"eq"}];
    var commitTuple18 = doc1.commit(commit18);
    data1 = clv.string.exec(data1, commitTuple18.toExec);

    var update17 = [{"siteId":"916e33c0-537f-11e7-80ac-bd67c573e4e8","seqId":9,"context":{"vector":{"916e33c0-537f-11e7-80ac-bd67c573e4e8":{"seqId":8,"invCluster":{"1":1,"2":1,"3":1,"4":1,"5":1,"6":1,"7":2},"invClusterSize":7}},"size":1},"invCount":0,"load":{"type":1,"at":3,"value":"Wor"},"execOrder":17}];
    var updateTuple17 = doc1.update(update17);
    data1 = clv.string.exec(data1, updateTuple17.toExec);

    var commit19 = [{"type":1,"at":5,"value":"r"}];
    var commitTuple19 = doc1.commit(commit19);
    data1 = clv.string.exec(data1, commitTuple19.toExec);

    var update18 = [{"siteId":"916e33c0-537f-11e7-80ac-bd67c573e4e8","seqId":10,"context":{"vector":{"916e33c0-537f-11e7-80ac-bd67c573e4e8":{"seqId":9,"invCluster":{"1":1,"2":1,"3":1,"4":1,"5":1,"6":1,"7":2},"invClusterSize":7}},"size":1},"invCount":0,"load":{"type":0,"at":6,"value":"eq"},"execOrder":18}];
    var updateTuple18 = doc1.update(update18);
    data1 = clv.string.exec(data1, updateTuple18.toExec);

    var commit20 = [{"type":1,"at":2,"value":" ld"}];
    var commitTuple20 = doc1.commit(commit20);
    data1 = clv.string.exec(data1, commitTuple20.toExec);

    var update19 = [{"siteId":"916e33c0-537f-11e7-80ac-bd67c573e4e8","seqId":11,"context":{"vector":{"916e33c0-537f-11e7-80ac-bd67c573e4e8":{"seqId":10,"invCluster":{"1":1,"2":1,"3":1,"4":1,"5":1,"6":1,"7":2},"invClusterSize":7}},"size":1},"invCount":0,"load":{"type":1,"at":5,"value":"r"},"execOrder":19}];
    var updateTuple19 = doc1.update(update19);
    data1 = clv.string.exec(data1, updateTuple19.toExec);

    var update20 = [{"siteId":"916e33c0-537f-11e7-80ac-bd67c573e4e8","seqId":12,"context":{"vector":{"916e33c0-537f-11e7-80ac-bd67c573e4e8":{"seqId":11,"invCluster":{"1":1,"2":1,"3":1,"4":1,"5":1,"6":1,"7":2},"invClusterSize":7}},"size":1},"invCount":0,"load":{"type":1,"at":2,"value":" ld"},"execOrder":20}];
    var updateTuple20 = doc1.update(update20);
    data1 = clv.string.exec(data1, updateTuple20.toExec);

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

    var serverUpdate0 = {"siteId":"916e33c0-537f-11e7-80ac-bd67c573e4e8","seqId":1,"context":{"vector":{},"size":0},"invCount":0,"load":{"type":1,"at":5,"value":" Wo"},"execOrder":1};
    updateServer(serverUpdate0);

    var serverUpdate1 = {"siteId":"916e33c0-537f-11e7-80ac-bd67c573e4e8","seqId":2,"context":{"vector":{"916e33c0-537f-11e7-80ac-bd67c573e4e8":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":0,"load":{"type":1,"at":2,"value":"ll"},"execOrder":2};
    updateServer(serverUpdate1);

    var serverUpdate2 = {"siteId":"916e33c0-537f-11e7-80ac-bd67c573e4e8","seqId":2,"context":{"vector":{"916e33c0-537f-11e7-80ac-bd67c573e4e8":{"seqId":2,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":0,"at":2,"value":"ll"},"execOrder":3};
    updateServer(serverUpdate2);

    var serverUpdate3 = {"siteId":"916e33c0-537f-11e7-80ac-bd67c573e4e8","seqId":3,"context":{"vector":{"916e33c0-537f-11e7-80ac-bd67c573e4e8":{"seqId":2,"invCluster":{"2":1},"invClusterSize":1}},"size":1},"invCount":0,"load":{"type":1,"at":5,"value":"r"},"execOrder":4};
    updateServer(serverUpdate3);

    var serverUpdate4 = {"siteId":"916e33c0-537f-11e7-80ac-bd67c573e4e8","seqId":4,"context":{"vector":{"916e33c0-537f-11e7-80ac-bd67c573e4e8":{"seqId":3,"invCluster":{"2":1},"invClusterSize":1}},"size":1},"invCount":0,"load":{"type":1,"at":5,"value":"ld"},"execOrder":5};
    updateServer(serverUpdate4);

    var serverUpdate5 = {"siteId":"916e33c0-537f-11e7-80ac-bd67c573e4e8","seqId":4,"context":{"vector":{"916e33c0-537f-11e7-80ac-bd67c573e4e8":{"seqId":4,"invCluster":{"2":1},"invClusterSize":1}},"size":1},"invCount":1,"load":{"type":0,"at":5,"value":"ld"},"execOrder":6};
    updateServer(serverUpdate5);

    var serverUpdate6 = {"siteId":"916e33c0-537f-11e7-80ac-bd67c573e4e8","seqId":3,"context":{"vector":{"916e33c0-537f-11e7-80ac-bd67c573e4e8":{"seqId":3,"invCluster":{"2":1},"invClusterSize":1}},"size":1},"invCount":1,"load":{"type":0,"at":5,"value":"r"},"execOrder":7};
    updateServer(serverUpdate6);

    var serverUpdate7 = {"siteId":"916e33c0-537f-11e7-80ac-bd67c573e4e8","seqId":5,"context":{"vector":{"916e33c0-537f-11e7-80ac-bd67c573e4e8":{"seqId":4,"invCluster":{"2":1,"3":1,"4":1},"invClusterSize":3}},"size":1},"invCount":0,"load":{"type":0,"at":1,"value":"r"},"execOrder":8};
    updateServer(serverUpdate7);

    var serverUpdate8 = {"siteId":"916e33c0-537f-11e7-80ac-bd67c573e4e8","seqId":5,"context":{"vector":{"916e33c0-537f-11e7-80ac-bd67c573e4e8":{"seqId":5,"invCluster":{"2":1,"3":1,"4":1},"invClusterSize":3}},"size":1},"invCount":1,"load":{"type":1,"at":1,"value":"r"},"execOrder":9};
    updateServer(serverUpdate8);

    var serverUpdate9 = {"siteId":"916e33c0-537f-11e7-80ac-bd67c573e4e8","seqId":1,"context":{"vector":{"916e33c0-537f-11e7-80ac-bd67c573e4e8":{"seqId":1,"invCluster":{},"invClusterSize":0}},"size":1},"invCount":1,"load":{"type":0,"at":5,"value":" Wo"},"execOrder":10};
    updateServer(serverUpdate9);

    var serverUpdate10 = {"siteId":"916e33c0-537f-11e7-80ac-bd67c573e4e8","seqId":6,"context":{"vector":{"916e33c0-537f-11e7-80ac-bd67c573e4e8":{"seqId":5,"invCluster":{"1":1,"2":1,"3":1,"4":1,"5":1},"invClusterSize":5}},"size":1},"invCount":0,"load":{"type":1,"at":0,"value":"H"},"execOrder":11};
    updateServer(serverUpdate10);

    var serverUpdate11 = {"siteId":"916e33c0-537f-11e7-80ac-bd67c573e4e8","seqId":6,"context":{"vector":{"916e33c0-537f-11e7-80ac-bd67c573e4e8":{"seqId":6,"invCluster":{"1":1,"2":1,"3":1,"4":1,"5":1},"invClusterSize":5}},"size":1},"invCount":1,"load":{"type":0,"at":0,"value":"H"},"execOrder":12};
    updateServer(serverUpdate11);

    var serverUpdate12 = {"siteId":"916e33c0-537f-11e7-80ac-bd67c573e4e8","seqId":7,"context":{"vector":{"916e33c0-537f-11e7-80ac-bd67c573e4e8":{"seqId":6,"invCluster":{"1":1,"2":1,"3":1,"4":1,"5":1,"6":1},"invClusterSize":6}},"size":1},"invCount":0,"load":{"type":0,"at":11,"value":"r"},"execOrder":13};
    updateServer(serverUpdate12);

    var serverUpdate13 = {"siteId":"916e33c0-537f-11e7-80ac-bd67c573e4e8","seqId":7,"context":{"vector":{"916e33c0-537f-11e7-80ac-bd67c573e4e8":{"seqId":7,"invCluster":{"1":1,"2":1,"3":1,"4":1,"5":1,"6":1},"invClusterSize":6}},"size":1},"invCount":1,"load":{"type":1,"at":11,"value":"r"},"execOrder":14};
    updateServer(serverUpdate13);

    var serverUpdate14 = {"siteId":"916e33c0-537f-11e7-80ac-bd67c573e4e8","seqId":7,"context":{"vector":{"916e33c0-537f-11e7-80ac-bd67c573e4e8":{"seqId":7,"invCluster":{"1":1,"2":1,"3":1,"4":1,"5":1,"6":1,"7":1},"invClusterSize":7}},"size":1},"invCount":2,"load":{"type":0,"at":11,"value":"r"},"execOrder":15};
    updateServer(serverUpdate14);

    var serverUpdate15 = {"siteId":"916e33c0-537f-11e7-80ac-bd67c573e4e8","seqId":8,"context":{"vector":{"916e33c0-537f-11e7-80ac-bd67c573e4e8":{"seqId":7,"invCluster":{"1":1,"2":1,"3":1,"4":1,"5":1,"6":1,"7":2},"invClusterSize":7}},"size":1},"invCount":0,"load":{"type":1,"at":2,"value":"llo"},"execOrder":16};
    updateServer(serverUpdate15);

    var serverUpdate16 = {"siteId":"916e33c0-537f-11e7-80ac-bd67c573e4e8","seqId":9,"context":{"vector":{"916e33c0-537f-11e7-80ac-bd67c573e4e8":{"seqId":8,"invCluster":{"1":1,"2":1,"3":1,"4":1,"5":1,"6":1,"7":2},"invClusterSize":7}},"size":1},"invCount":0,"load":{"type":1,"at":3,"value":"Wor"},"execOrder":17};
    updateServer(serverUpdate16);

    var serverUpdate17 = {"siteId":"916e33c0-537f-11e7-80ac-bd67c573e4e8","seqId":10,"context":{"vector":{"916e33c0-537f-11e7-80ac-bd67c573e4e8":{"seqId":9,"invCluster":{"1":1,"2":1,"3":1,"4":1,"5":1,"6":1,"7":2},"invClusterSize":7}},"size":1},"invCount":0,"load":{"type":0,"at":6,"value":"eq"},"execOrder":18};
    updateServer(serverUpdate17);

    var serverUpdate18 = {"siteId":"916e33c0-537f-11e7-80ac-bd67c573e4e8","seqId":11,"context":{"vector":{"916e33c0-537f-11e7-80ac-bd67c573e4e8":{"seqId":10,"invCluster":{"1":1,"2":1,"3":1,"4":1,"5":1,"6":1,"7":2},"invClusterSize":7}},"size":1},"invCount":0,"load":{"type":1,"at":5,"value":"r"},"execOrder":19};
    updateServer(serverUpdate18);

    var serverUpdate19 = {"siteId":"916e33c0-537f-11e7-80ac-bd67c573e4e8","seqId":12,"context":{"vector":{"916e33c0-537f-11e7-80ac-bd67c573e4e8":{"seqId":11,"invCluster":{"1":1,"2":1,"3":1,"4":1,"5":1,"6":1,"7":2},"invClusterSize":7}},"size":1},"invCount":0,"load":{"type":1,"at":2,"value":" ld"},"execOrder":20};
    updateServer(serverUpdate19);

  });

  it("All sites should have same data with the server", function() {
    assert.equal(data1, serverData.data, "Site 1 data should be equal to server");
  });

});
